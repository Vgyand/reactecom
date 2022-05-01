export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})

export const setCategory = (index) => ({
    type: 'SET_CATEGORY',
    payload: index,
})