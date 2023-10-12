// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import RootLayout from './pages/Root'
import EditEventPage from './pages/EditEventPage'
import EventDetailPage from './pages/EventDetailPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'

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
                element: <EventsPage />,
                children: [
                    {
                        path: ':eventId',
                        element: <EventDetailPage />,
                    },
                    {
                        path: 'new',
                        element: <EditEventPage />,
                    },
                    {
                        path: ':eventId/edit',
                        element: <EditEventPage />,
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
