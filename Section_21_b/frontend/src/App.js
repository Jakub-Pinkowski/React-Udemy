import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import axios from 'axios'

import RootLayout from './pages/Root'
import EditEventPage from './pages/EditEventPage'
import EventDetailPage from './pages/EventDetailPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import EventsRootLayout from './pages/EventsRoot'
import NewEventPage from './pages/NewEventPage'

const url = 'http://localhost:8080/events'

const eventsLoader = async () => {
    const response = await axios.get(url)

    if (!response.ok) {
        // TODO: handle error
    } else {
        const resData = await response.json()
        return resData.events
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
