"use client"

import Layout from "../_components/layout/Layout";
import NewMeetupForm from "../_components/meetups/NewMeetupForm";

// our-domain.com/news

function MeetupPage() {
    function addMeetupHandler(enterMeetupData) {
        console.log(enterMeetupData)
    }

    return (
        <Layout>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Layout>
    )
}

export default MeetupPage;