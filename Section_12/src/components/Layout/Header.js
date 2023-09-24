import { Fragment } from 'react'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/images/meals.jpg'

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}

export default Header
