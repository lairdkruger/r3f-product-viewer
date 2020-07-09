import React from 'react'

function Lighting() {
    return (
        <>
            <ambientLight color={'white'} intensity={0.2} />
            <pointLight color={'white'} position={[10, 2, 10]} />
            <directionalLight color={'white'} intensity={1.0} position={[-2, 2, 5]} />
        </>
    )
}

export default Lighting
