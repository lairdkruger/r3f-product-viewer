import React, {Suspense, useRef} from 'react'
import {Canvas} from 'react-three-fiber'
import {OrbitControls} from 'drei'

import Lighting from './Lighting'
import Watch from './Watch'

function Product(props) {
    const controls = useRef()

    const Scene = () => {
        return (
            <>
                <Lighting />

                <Suspense fallback={null}>
                    <Watch color={props.color} setColor={props.setColor} />
                </Suspense>
                <OrbitControls ref={controls} />
            </>
        )
    }
    return (
        <div className="canvas-container">
            <Canvas pixelRatio={window.devicePixelRatio}>
                <Scene />
            </Canvas>
        </div>
    )
}

export default Product
