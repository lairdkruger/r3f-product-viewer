import React from 'react'

function Customise(props) {
    return (
        <div className="customise-container">
            <h2>Customise</h2>
            <div className="customise-options-container">
                <div className="customise-option">
                    <h4 className="option-text">View?</h4>
                    <button>RESET</button>
                    <button onClick={(e) => console.log('clicked')}>EXPAND</button>
                </div>
                <div className="customise-option">
                    <h4 className="option-text">Color?</h4>
                    <button onClick={(e) => props.setColor('black')}>BLACK</button>
                    <button onClick={(e) => props.setColor('white')}>WHITE</button>
                    <button onClick={(e) => props.setColor('orange')}>ORANGE</button>
                </div>
            </div>
        </div>
    )
}

export default Customise
