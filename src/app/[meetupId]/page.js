'use client';

import { useParams } from "next/navigation";
import { Fragment } from "react";
import MeetupDetail from "@/app/_components/meetups/MeetupDetail";

// our-domain.com/new-meepup/meetupId

function DetailPage() {
    const router = useParams();
    const meetupId = router.meetupId;

    console.log(meetupId)
    console.log(router)

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

export default DetailPage;