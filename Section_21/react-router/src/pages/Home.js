import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>
                <Link to="/products">View Products</Link>
            </p>
        </div>
    )
}

export default HomePage
