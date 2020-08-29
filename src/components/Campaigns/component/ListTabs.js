import React from 'react';
import { listTabs } from '../../../utility/Constant';
import './component.scss'
const TabList=()=>{
    return(
        <div className="listTabs">
            {listTabs.map((tab,index)=>{
                return(
                    <span className={`mini_bold ${index%2 == 0 ? "even": "odd"}`}>
                        {tab.label}
                    </span>
                )
            })}
        </div>
    )

}

export default TabList;