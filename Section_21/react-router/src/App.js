import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './pages/Root'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'products',
                element: <ProductsPage />,
            },
            {
                path: 'products/:productId',
                element: <ProductDetail />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
