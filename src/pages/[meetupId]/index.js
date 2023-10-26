import MeetupDetail from "@/app/_components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

// our-domain.com/new-meepup/meetupId

function MeetupDetails(props) {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.9bab5uw.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    // 모든 객체 정보를 원해서 {} 빈 객체 투입
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false, // 지정한 페이지만 나오게
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

// 동적인 페이지에는 getStaticProps 사용
export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;

    // getStaticPaths() 을 사용한 뒤에 작동.
    // 데이터를 동적으로 가져오기
    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.9bab5uw.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        },
    }
}

export default MeetupDetails;