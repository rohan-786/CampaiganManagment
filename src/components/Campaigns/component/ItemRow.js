import React from 'react';
import Campaign from '../Campaign';

const Elements = {
    Date : (dateInfo)=>{
        if(!dateInfo) return null;
        const {text, subText} = dateInfo;
        return(
            <div>
                <span>{text}</span>
                <span>{subText}</span>
            </div>
        )
    },

    Campaign :(campaignInfo) =>{
        if(!campaignInfo) return null;
        const {imgClass , text ,subText} = campaignInfo;
        return(
            <div>
                <i className={imgClass}></i>
                <div>
                    <span>{text}</span> 
                    <span>{subText}</span>
                </div>
            </div>
        )
    },

    View : (viewInfo) =>{
        if(!viewInfo) return null;
        const {logoUrl , text} = viewInfo;
        return(
            <div>
                <i className={logoUrl}></i>
                <span>{text}</span>
            </div>
        )
    },

    Actions : (actionInfo)=>{
        if(!actionInfo) return null;
        return(
            <div>
                {actionInfo.map((item)=>{
                    const {logoUrl , text , addEventHandler} = item;
                    return(
                        <div>
                            <i className={logoUrl}></i>
                            <span>{text}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

}



const ItemRow=(props)=>{
    const {data:{date, campaing ,pricing ,actions}={}} = props;    
    return(
        <React.Fragment>
            {Elements.Date(date)}
            {Elements.Campaign(campaing)}
            {Elements.View(pricing)}
            {Elements.Actions(actions)}
           {/* <Elements.Date dateInfo={date}/>
           <Elements.Campaign campaignInfo={campaing}/>
           <Elements.View viewInfo={pricing}/> */}
           {/* <Elements.Actions actionInfo={actions}/>  */}
        </React.Fragment>
    )

}

export default ItemRow;