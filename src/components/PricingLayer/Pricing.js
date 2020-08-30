import React from 'react';
import { dummyPricingData } from '../../utility/Constant';
import './pricing.scss'

const Pricing=(props)=>{
    const {imgClass , name , location,pricingHeading , pricing =[]} = dummyPricingData;
    const {closePricingPopup ,data:{price}={}} = props;
    return(
        <div className="pricingWrap">
            <div className="titleContainer">
                <i className={`imgWrap ${imgClass}`}></i>
                <div className="titlefonts">
                    <span className="headBold">{name}</span>
                    <span className="semiBold">{location}</span>
                </div>
            </div>
            <div className="priceContainer">
                <span className="titleBold">{pricingHeading}</span>
                <div className="priceInfo">
                    {pricing.map((priceItem)=>{
                        const {label , value} = priceItem;
                        return(
                            <div>
                                <span className="rowLabel">{label}</span>
                                <span className="rowVal">{price ? price :value}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div onClick={closePricingPopup} className="closeBtn"><span>Close</span></div>
        </div>
    )
}

export default Pricing;