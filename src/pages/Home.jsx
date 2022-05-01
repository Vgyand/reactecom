import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import PizzaLoader from '../components/PizzaLoader'
import { addPizzaToCart } from '../redux/actions/cart';

const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];
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
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filter }) => filter);

    const handleAddPizza = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    const onSelectCategory = useCallback(
        (item) => {

            dispatch(setCategory(item))
        },
        [],
    )

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} items={categoryName}
                    onClickCategory={onSelectCategory}
                />
                <SortPopup activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map(item => <PizzaBlock onClickAddPizza={handleAddPizza} addedCount={cartItems[item.id] && cartItems[item.id].items.length} key={item.id} {...item} isLoaded={true} />) : Array(12).fill(0).map((_, index) => <PizzaLoader key={index} />)}
            </div>
        </div>
    )
}

export default Home