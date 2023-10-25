import { useParams } from "next/navigation";

// our-domain.com/new-meepup/newsId

function DetailPage() {
    const router = useParams();
    const newsId = router.newsId;

    console.log(newsId)
    console.log(router)

    // send a request to the backend API
    // to fetch the news item with newsId

    return (
        <h1>
            DetailPage
        </h1>
    )
}

export default DetailPage;