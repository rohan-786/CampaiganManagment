import React from 'react';
import Campaign from './component.scss';

const Elements = {
    Date : (dateInfo)=>{
        if(!dateInfo) return null;
        const {text, subText} = dateInfo;
        return(
            <div className="dateFont even">
                <span className="semiBold">{text}</span>
                <span className="miniBoldI">{subText}</span>
            </div>
        )
    },

    Campaign :(campaignInfo) =>{
        if(!campaignInfo) return null;
        const {imgClass , text ,subText} = campaignInfo;
        return(
            <div className="odd">
                <i className={`iconSpecCamp ${imgClass}`}></i>
                <div className="campaignFont">
                    <span className="semiBold">{text}</span> 
                    <span className="miniBoldI">{subText}</span>
                </div>
            </div>
        )
    },

    View : (viewInfo,clickHandler,itemData) =>{
        if(!viewInfo) return null;
        const {logoUrl , text} = viewInfo;
        return(
            <div className="even">
                <i className={`iconSpecPrice ${logoUrl}`}></i>
                <span onClick={()=>clickHandler(itemData)} className="viewFont">{text}</span>
            </div>
        )
    },

    Actions : (actionInfo,clickHandler,data)=>{
        if(!actionInfo) return null;
        return(
            <div className="odd">
                {actionInfo.map((item,index)=>{
                    const {logo , text , addEventHandler} = item;
                    return(
                        <div onClick ={addEventHandler ? ()=>clickHandler(data) : null} className={index%2 == 0 ?  'spacer40' : 'spacer60'}>
                            <i className={`iconSpecActions ${logo}`}></i>
                            <span className="actions">{text}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

}



const ItemRow=(props)=>{
    const {pricingHandler, handleScheduleClick ,showLine = false,data ,data:{date, campaing ,pricing ,actions}={}} = props;    
    return(
        <div className='row font '>
            {Elements.Date(date)}
            {Elements.Campaign(campaing)}
            {Elements.View(pricing,pricingHandler,data)}
            {Elements.Actions(actions,handleScheduleClick,data)}
            {showLine && <div className="line"></div>}
        </div>
    )

}

export default ItemRow;