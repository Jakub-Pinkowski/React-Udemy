import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Chicago_from_North_Avenue_Beach_June_2015_panorama_2.jpg/1280px-Chicago_from_North_Avenue_Beach_June_2015_panorama_2.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Chicago_from_North_Avenue_Beach_June_2015_panorama_2.jpg/1280px-Chicago_from_North_Avenue_Beach_June_2015_panorama_2.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!',
    },
]

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage
