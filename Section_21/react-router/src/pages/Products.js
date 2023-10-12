import { Link } from 'react-router-dom'

const PRODUCTS = [
    { id: 'p1', title: 'A Book' },
    { id: 'p2', title: 'A Carpet' },
    { id: 'p3', title: 'An Online Course' },
]

function ProductsPage() {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={product.id}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProductsPage
