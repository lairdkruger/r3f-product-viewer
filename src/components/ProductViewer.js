import React, {useState} from 'react'

import Product from './Product'
import Customise from './Customise'

function ProductViewer(props) {
    const [color, setColor] = useState('black')

    return (
        <div className="product-viewer-container">
            <Product setColor={setColor} color={color} />
            <Customise setColor={setColor} color={color} />
        </div>
    )
}

export default ProductViewer
