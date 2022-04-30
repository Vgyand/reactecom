import axios from 'axios'


export const fetchPizzas = () => (dispatch) => (
    axios.get('http://localhost:3001/pizzas')
        .then(res => {
            dispatch(setPizzas(res.data))
        })
)

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})

