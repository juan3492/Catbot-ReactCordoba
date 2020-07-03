import React from 'react'
import './CatItem.css'
import catAvatar from '../../../assets/images/catAvatar.png'
import Fade from 'react-reveal/Fade'

const CatItem = ({text}) => {
    return(
        <div className="cat-item-container">
            <img src={catAvatar} alt=""/>
                <div className="cat-item-messages">
            {text.map((t, index) => 
                    <Fade left>
                        <label > {t} </label>
                    </Fade>
            )}
                </div>
        </div>
    )
}

export default CatItem