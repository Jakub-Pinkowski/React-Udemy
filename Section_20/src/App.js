import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

const firebaseUrl = 'https://react-counter-64e25-default-rtdb.europe-west1.firebasedatabase.app/'

function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible)
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        const sendCartData = async () => {
            const response = await axios.put(firebaseUrl + 'cart.json', cart)
            console.log(response)
        }
        sendCartData()
    }, [cart])

    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    )
}

export default App
