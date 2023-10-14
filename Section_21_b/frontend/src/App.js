import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import RootLayout from './pages/Root'
import EditEventPage from './pages/EditEventPage'
import EventDetailPage from './pages/EventDetailPage'
import EventsPage, {loader as eventsLoader} from './pages/EventsPage'
import HomePage from './pages/HomePage'
import EventsRootLayout from './pages/EventsRoot'
import NewEventPage from './pages/NewEventPage'

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
