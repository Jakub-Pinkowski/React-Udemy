import { useSelector, useDispatch } from 'react-redux'
import { useEffect, Fragment } from 'react'
import axios from 'axios'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'
import { uiActions } from './store/ui-slice'

let isInitial = true

const firebaseUrl = 'https://react-counter-64e25-default-rtdb.europe-west1.firebasedatabase.app/'

function App() {
    const dispatch = useDispatch()
    const notification = useSelector((state) => state.ui.notification)
    const showCart = useSelector((state) => state.ui.cartIsVisible)
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: 'pending',
                    title: 'Sending...',
                    message: 'Sending cart data!',
                })
            )
            const response = await axios.put(firebaseUrl + 'cart.json', cart)

            if (response.status !== 200) {
                throw new Error('Sending cart data failed.')
            }

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            )
        }

        if (isInitial) {
            isInitial = false
            return
        }

        sendCartData().catch((error) => {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            )
        })
    }, [cart, dispatch])

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    )
}

export default App
