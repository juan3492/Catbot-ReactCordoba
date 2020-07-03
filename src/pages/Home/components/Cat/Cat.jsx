import React from 'react';
import Lottie from 'react-lottie';
import animationCat from './4889-cat.json'
import './Cat.css';

const Cat = ({ history }) => {
    
    const defaultOptions = {
        loop: true,
        autoplat: true,
        animationData: animationCat,
    };

    function handleOnClick() {
        history.push('/chat')
    }
    
    return (
        <div onClick={handleOnClick} 
        className="cat-container">
            <Lottie 
            options={defaultOptions}

    
            />
        </div>
    )
};

export default Cat;
