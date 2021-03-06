import axios from 'axios'


export const setLoaded = (payload) => ({
    type: 'SET_LOADING',
    payload,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))

    axios.get(`/pizzas?${category !== null && category !== 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(res => {
            dispatch(setPizzas(res.data))
        })


}


export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})

