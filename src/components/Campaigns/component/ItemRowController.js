import React from 'react';
import { connect } from 'react-redux';
import { apiCalls } from '../../../Redux/Api/api';
import ItemRow from './ItemRow';
import { reformatItemRowsData } from '../../../utility/commonUtility';
import Pricing from '../../PricingLayer/Pricing';
import CustomDialog from '../../../Redux/component/core/CustomDialogBox/CustomDialog';
import {setStore} from "../../../Redux/Actions/Action";

class ItemRowController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showViewPricing: false,
            selectedItem: {}
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
                .then(data => this.setState({ data, showViewPricing: false }))
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

    render() {
        const { data, showViewPricing, selectedItem } = this.state;
        if (!data) return null;
        const reformatedData = reformatItemRowsData(data);

        return (
            <React.Fragment>
                {reformatedData.map((item, index) => {
                    return (<ItemRow data={item}
                        showLine={reformatedData.length > 1}
                        pricingHandler={this.viewPricingClickHandler}
                    />)
                })}
                {showViewPricing &&
                    <CustomDialog name="pricingDialog" toggleDialogFlag={showViewPricing}>
                        <Pricing data={selectedItem} closePricingPopup={this.closePricingPopup} />
                     </CustomDialog>
                    }
            </React.Fragment>
        );
    }
}

const mstp = (state) => {
    const { navigation: { selectedTab } = {} } = state;
    return { selectedTab };
}
const mdtp =(dispatch) =>({
    setOverLay(data) {
        dispatch(setStore("SET_OVERLAY", data))
    },
})
export default connect(mstp, mdtp)(ItemRowController);