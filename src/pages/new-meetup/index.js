import NewMeetupForm from '@/app/_components/meetups/NewMeetupForm';

// our-domain.com/news

function NewMeetupPage() {
    function addMeetupHandler(enterMeetupData) {
        console.log(enterMeetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;