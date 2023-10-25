"use client"
import { useParams } from "next/navigation";

// our-domain.com/new-meepup/meetupId

function DetailPage() {
    const router = useParams();
    const meetupId = router.meetupId;

    console.log(meetupId)
    console.log(router)

    // send a request to the backend API
    // to fetch the news item with meetupId

    return (
        <h1>
            DetailPage
        </h1>
    )
}

export default DetailPage;