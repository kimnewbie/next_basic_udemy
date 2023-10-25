import MeetupList from '@/app/_components/meetups/MeetupList';

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
        <MeetupList meetups={props.meetups} />
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

export function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 3600 // 1시간
    };
}

export default HomePage;