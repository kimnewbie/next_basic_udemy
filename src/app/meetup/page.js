"use client"

import NewMeetupForm from "../_components/meetups/NewMeetupForm";

// our-domain.com/news

function MeetupPage() {
    function addMeetupHandler(enterMeetupData) {
        console.log(enterMeetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default MeetupPage;