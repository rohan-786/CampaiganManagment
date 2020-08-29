import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { apiCall } from '../../../Api/api';
import "./userInfo.scss";
import Card from "../../core/CustomCard/Card";
import { setStore } from '../../../Actions/Action';
import { getCurrentDateAndTime } from '../../../utility/utility';


const UserInfo = (props) => {

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        apiCall.getUserInfo()
            .then(data => data.json())
            .then(data => setUserData(data))
            .catch(err => console.log(err));
    }, [])

    const makeUserActivityApiCall=(id)=>{
        apiCall.getUseActivityInfo(id)
               .then(data=>data.json())
               .then(data=>{
                   props.setUserActivityData(data);
                   props.showUserActivityPanel(true);
                })
               .catch(err=>console.log(err))
    }
    
    
    const createUsrInfoCard = ({ name, tz ,id }) => {
        return (<div key={id} onClick={()=>makeUserActivityApiCall(id)} className="cardWrp">
            <div>
                <span>Name:</span>
                <span>{name}</span>
            </div>
            <div>
                <span>Location:</span>
                <span>{tz}</span>
            </div>
        </div>)
    }
    


    return (
        <div>
            {userData && userData.map((user,index) => {
                const { name, tz  ,id} = user;
                return (<Card customUserDefinedCard={createUsrInfoCard({ name, tz ,id })}/> );
            })}
        </div>
    )

}


const mdtp=(dispatch)=>({
    setUserActivityData(data){
        dispatch(setStore("SET_USER_ACTIVITY_DATA", data))
    },
    showUserActivityPanel(flag){
        dispatch(setStore("SET_USER_ACTIVITY_VISIABLE_FLAG",flag))
    }
})
export default connect(null,mdtp)(UserInfo);