import { createSlice } from '@reduxjs/toolkit'

const initialCartState = { items: [], totalQuantity: 0, changed: false }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {},
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
