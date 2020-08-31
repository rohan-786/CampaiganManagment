import React from 'react';
import { connect } from 'react-redux';
import { apiCalls } from '../../../Redux/Api/api';
import ItemRow from './ItemRow';
import { reformatItemRowsData ,customDate,getCurrentDate, updateList, needToUpdateList } from '../../../utility/commonUtility';
import Pricing from '../../PricingLayer/Pricing';
import CustomDialog from '../../../Redux/component/core/CustomDialogBox/CustomDialog';
import {setStore} from "../../../Redux/Actions/Action";
import CustomCalendar from "../../../Redux/component/core/Calendar/Calendar";

class ItemRowController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showViewPricing: false,
            selectedItem: {},
            showCalendar : false
        }
    }
    componentDidMount() {
        const { selectedTab: { apiCall } = {} } = this.props;
        apiCalls[apiCall]()
            .then(data => data.json())
            .then(data => this.setState({ data }))
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedTab.id !== this.props.selectedTab.id) {
            apiCalls[this.props.selectedTab.apiCall]()
                .then(data => data.json())
                .then(data => this.setState({ data, showViewPricing: false,showCalendar : false }))
                .catch(err => console.log(err))
        }
    }

    viewPricingClickHandler = (selectedItem) => {
        this.setState({
            showViewPricing: true,
            selectedItem
        },()=>{
            this.props.setOverLay(true)
        })
    }
    closePricingPopup = () => {
        this.setState({
            showViewPricing: false
        },()=>{
            this.props.setOverLay(false);
            document.body.style.overflow="";
        })
    }

    handleScheduleClick= (selectedItem) => {
        this.setState({showCalendar:true , selectedItem})
    }

    closeCalenderClick =() =>{
        this.setState({showCalendar:false},()=>{
            this.props.setOverLay(false);
            document.body.style.overflow="";
        })
    }

    rescheduleHandler=()=>{
        const {selectedDate} = this.props;
        const {data,selectedItem:{id,date:{text}={}}={}} = this.state;
        const currentDate = getCurrentDate();
        const needToUpdateState = needToUpdateList(currentDate,text,selectedDate);
        if(!needToUpdateState){
            alert("You can't update on this date");
        }
        if(needToUpdateState){
            const val = customDate.compareDates(currentDate ,selectedDate);
            const updatedList = updateList(data,id)
            this.setState({
                data : updatedList
            },()=>{
                apiCalls.updateCampaignsList(id,customDate.dateToInteger(selectedDate)).then(res=>console.log("success")).catch(err=>console.log("error"))
            })

        }
        this.closeCalenderClick();  
            
    }

    render() {
        const { data, showViewPricing, selectedItem ,showCalendar } = this.state;
        if (!data) return null;
        const reformatedData = reformatItemRowsData(data);

        return (
            <React.Fragment>
                {reformatedData.map((item, index) => {
                    return (<ItemRow data={item}
                        showLine={reformatedData.length > 1}
                        pricingHandler={this.viewPricingClickHandler}
                        handleScheduleClick={this.handleScheduleClick}
                    />)
                })}
                {showViewPricing &&
                    <CustomDialog name="pricingDialog" toggleDialogFlag={showViewPricing}>
                        <Pricing data={selectedItem} 
                                 closePricingPopup={this.closePricingPopup} />
                     </CustomDialog>
                    }
                {showCalendar &&
                    <CustomDialog name="calendarDialog" toggleDialogFlag={showCalendar} >
                        <CustomCalendar closeCalenderClick={this.closeCalenderClick}
                        rescheduleHandler={this.rescheduleHandler}/>
                    </CustomDialog>

                }    
            </React.Fragment>
        );
    }
}

const mstp = (state) => {
    const { comman:{selectedDate} ={},navigation: { selectedTab } = {} } = state;
    return { selectedTab , selectedDate };
}
const mdtp =(dispatch) =>({
    setOverLay(data) {
        dispatch(setStore("SET_OVERLAY", data))
    },
})
export default connect(mstp, mdtp)(ItemRowController);