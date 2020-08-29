import React from 'react';
import "./card.scss";

const CustomCard = (props) => {
    const { customUserDefinedCard } = props;

    return (<div className={'customcardWrp'}>
        {customUserDefinedCard}
    </div>)
}


export default CustomCard;

