import { useParams } from "next/navigation";
import MeetupDetail from "@/app/_components/meetups/MeetupDetail";

// our-domain.com/new-meepup/meetupId

function DetailPage() {
    const router = useParams();
    console.log(router)
    const meetupId = router?.meetupId;

    // send a request to the backend API
    // to fetch the news item with meetupId


    return (
        <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/0/02/Brisbane_May_2013.jpg'
            title='A First Meetup'
            address='Brisbane, Queensland 4000'
            description='The meetup description'
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false, // 지정한 페이지만 나오게
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ]
    }
}

// 동적인 페이지에는 getStaticProps 사용
export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Brisbane_May_2013.jpg',
                id: meetupId,
                title: 'A First Meetup',
                address: 'Brisbane, Queensland 4000',
                description: 'The meetup description'
            }
        },
    }
}

export default DetailPage;