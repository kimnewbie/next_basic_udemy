import MeetupList from '@/app/_components/meetups/MeetupList';
import { useEffect, useState } from 'react';

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
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Brisbane_May_2013.jpg',
        address: 'Brisbane, Queensland 4000',
        description: 'This is a second meetup',
    },
]

const HomePage = () => {
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        // set a http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);

    return (
        <MeetupList meetups={loadedMeetups} />
    )
}

export default HomePage