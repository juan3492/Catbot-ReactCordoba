import React from 'react'
import './Select.css';
import Fade from 'react-reveal/Fade'

const Select = ({ options, handleSelectedOptions }) => {
    return(
        <Fade rigth>
            <div className="selector-content">
                <div className="selector-container">
                        { options.map((op) => 
                        <div 
                        onClick={(e) => handleSelectedOptions(op.id)}
                        key={op.id} 
                        className="selector-options">
                            <label> { op.text } </label>
                        </div>
                        )}
                </div>
            </div>
        </Fade>
    )   
};

export default Select