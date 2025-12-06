import React, { useState } from 'react'
import '../testingApp/testapp.css'

const TestApp = () => {

    const [items, setItems] = useState(
        Array.from({ length: 100 }, (_, i) => ({
            id: i + 1,
            item: `Item ${i + 1}`
        }))
    );

    return (
        <div className='page-container'>
            <div className='top-section'>
                <h2>Header/Filter/Button</h2>
            </div>

            <div className='scroll-section'>
                <ul>
                    {items.map((obj) => (
                        <li key={obj.id}>
                            {obj.item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TestApp
