import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategory } from '../redux/actions/filters';

const sortItems = ['популярности', 'цене', 'алфавиту']


const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const onSelectCategory = useCallback(
        (item) => {
            dispatch(setCategory(item))
        },
        [],
    )


    return (
        <div className="container">
            <div className="content__top">
                <Categories items={[
                    'Все',
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые'
                ]}
                    onClickItem={onSelectCategory}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(item => <PizzaBlock key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Home