const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description: 'Learn about programming languages in 2021',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/coding-event.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description: 'Learn how to connect with people without leaving your home.',
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description: 'You probably need no help with networking in general.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/extrovert-event.jpg',
        isFeatured: true,
    },
]

const EventsPage = () => {
    return (
        <div>
            <h1>Events Page</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => (
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default EventsPage
