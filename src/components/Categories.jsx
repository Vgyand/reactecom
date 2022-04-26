import React, { useState } from 'react'

const Categories = ({ items }) => {

    const [selected, setSelected] = useState(0)

    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) =>
                    <li className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} key={item}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default Categories