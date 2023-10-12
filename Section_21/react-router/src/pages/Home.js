import { Link, useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()

    function navigateHandler() {
        navigate('/products')
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>
                <Link to="/products">View Products</Link>
            </p>
            <p>
                <button type="button" onClick={navigateHandler}>
                    Products
                </button>
            </p>
        </div>
    )
}

export default HomePage
