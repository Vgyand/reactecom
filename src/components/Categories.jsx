

const Categories = ({ activeCategory, items, onClickCategory }) => {


    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) =>
                    <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={item}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default Categories