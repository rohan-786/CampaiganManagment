import React from "react";
import "./userActivity.scss"
const ActivityCard = (props) => {
    const { data = [] } = props;

    return (<div className="activityWrp cardWrp">
        {data.map((timing ,index) => {
            const { start_time, end_time } = timing;
            return(<div key={index}>
                <div>
                    <span className="label">Check in:</span>
                    <span className="val">{start_time}</span></div>
                <div>
                    <span className="label">Check out:</span>
                    <span className="val">{end_time}</span>

                </div>
            </div>)
        })}

    </div>)
}

export default ActivityCard;