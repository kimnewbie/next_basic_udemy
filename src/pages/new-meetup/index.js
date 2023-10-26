import NewMeetupForm from '@/app/_components/meetups/NewMeetupForm';
import { useRouter } from 'next/navigation';

// our-domain.com/news

function NewMeetupPage() {
    const router = useRouter();
    async function addMeetupHandler(enterMeetupData) {
        // 절대 경로
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enterMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data)
        router.push('/');
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;