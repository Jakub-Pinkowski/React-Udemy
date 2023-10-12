import { uiActions } from './ui-slice'
import { cartActions } from './cart-slice'
import axios from 'axios'

const firebaseUrl = 'https://react-counter-64e25-default-rtdb.europe-west1.firebasedatabase.app/'

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(firebaseUrl + 'cart.json')

            if (response.status !== 200) {
                throw new Error('Could not fetch cart data!')
            }

            const data = await response.data

            return data
        }

        try {
            const cartData = await fetchData()
            console.log(cartData)

            dispatch(cartActions.replaceCart(cartData))
        } catch {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            )
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        )

        const sendRequest = async () => {
            const response = await axios.put(firebaseUrl + 'cart.json', cart)

            if (response.status !== 200) {
                throw new Error('Sending cart data failed.')
            }
        }
        try {
            await sendRequest()

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            )
        } catch {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            )
        }
    }
}
