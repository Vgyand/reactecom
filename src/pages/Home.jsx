import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import PizzaLoader from '../components/PizzaLoader'

const sortItems = [{ name: 'популярности', type: 'popular' }, { name: 'цене', type: 'popular' }, { name: 'алфавиту', type: 'alphabet' }]
const categoryName = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
]

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const onSelectCategory = useCallback(
        (item) => {
            dispatch(setCategory(item))
        },
        [],
    )

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryName}
                    onClickItem={onSelectCategory}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(item => <PizzaBlock key={item.id} {...item} isLoaded={true} />) : Array(12).fill(<PizzaLoader />)}
            </div>
        </div>
    )
}

export default Home