import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import axios from 'axios'

import RootLayout from './pages/Root'
import EditEventPage from './pages/EditEventPage'
import EventDetailPage from './pages/EventDetailPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import EventsRootLayout from './pages/EventsRoot'
import NewEventPage from './pages/NewEventPage'

const eventsUlr = 'http://localhost:8080/events'

const eventsLoader = async () => {
    const response = await axios.get(eventsUlr)

    if (response.status !== 200) {
        throw new Error('Error loading events')
    } else {
        return response.data.events
    }
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'events',
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    {
                        path: ':eventId',
                        element: <EventDetailPage />,
                    },
                    {
                        path: ':eventId/edit',
                        element: <EditEventPage />,
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />,
                    },
                ],
            },
        ],
    },
])

function App() {
    return (
        <RouterProvider router={router}>
            <Outlet />
        </RouterProvider>
    )
}

export default App
