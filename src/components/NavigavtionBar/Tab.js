import React from 'react';
import './navigationBar.scss'
const Tab = (props) => {
    const { data , eventHandler ,active } = props;
    if (!data) return null;

    const { id, label } = data;

    return (
        <React.Fragment>
            <span onClick={()=>eventHandler(data)} className={`tab ${active ? 'selected' : ''}`} key={id}>
                {label}
            </span>
            {active && <span className="selectedBar"></span>}
           
        </React.Fragment>
    )
}

export default Tab;