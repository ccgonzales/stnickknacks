import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const ShopButton = () => {
    return(  
        <div className="shopButton__container">
            <a href="https://stnickknacks.etsy.com?ref=ws" className="shopButton__link">
            <FontAwesomeIcon icon={faStore} /> Etsy Shop</a>
        </div>
        )
}

export default ShopButton;