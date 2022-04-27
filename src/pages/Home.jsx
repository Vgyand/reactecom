import React from 'react'
import { useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from "../components";



const Home = () => {

    const { items } = useSelector(({ pizzas }) => {
        return {
            items: pizzas.items,
        }
    });


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
                    onClickItem={(item) => console.log(item)}
                />
                <SortPopup items={['популярности', 'цене', 'алфавиту']} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(item => <PizzaBlock key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Home