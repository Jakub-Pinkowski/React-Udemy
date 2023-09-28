import { useContext } from 'react'

import classes from './HeaderCartButton.module.css'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton
