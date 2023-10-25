'use client'

import { useParams } from "next/navigation";

// our-domain.com/news/newsId

function DetailPage() {
    const router = useParams();
    const newsId = router.newsId;

    // send a request to the backend API
    // to fetch the news item with newsId

    return (
        <h1>
            DetailPage
        </h1>
    )
}

export default DetailPage;