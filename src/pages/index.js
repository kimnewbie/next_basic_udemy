import MeetupList from '@/app/_components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Brisbane First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Brisbane_May_2013.jpg',
        address: 'Brisbane, Queensland 4000',
        description: 'This is a first meetup',
    },
    {
        id: 'm2',
        title: 'Brisbane Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/KurilpaBridgeConstruction2.JPG',
        address: 'Brisbane, Queensland 4000',
        description: 'This is a second meetup',
    },
]

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>YJ | Meetup - Next</title>
                <meta
                    name='description'
                    content='Browse a huge list of highly active React-Next meetups'
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// export function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    // fetch data from an API

    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.9bab5uw.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 3600 // 1시간
    };
}

export default HomePage;