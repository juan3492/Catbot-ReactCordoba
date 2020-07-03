import React from "react";
import './UserItem.css'
import userAvatar from '../../../assets/images/userAvatar.png'
import Fade from "react-reveal/Fade"

const UserItem = ({ text }) => {
    return(
        <div className="user-item-container">
            <div className="user-item-messages">
                <Fade right>
                    <label> {text} </label>
                </Fade>
            </div>
            <img src={userAvatar} alt=""/>
        </div>
    );
};

export default UserItem;