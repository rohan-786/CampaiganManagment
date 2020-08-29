/**
 * 
 * author : Rohan choudhary.
 * This is the customized dialog box.
 * Required Params : name;
 * Feature : It provide popup dialog box container.User can pass there component on this 
 * container. And along with that user can dispatch any action with the data.  
 * 
 */

import React from 'react';
import { isEmpty } from '../../../utility/utility';
import { connect } from 'react-redux';
import { setStore } from '../../../Actions/Action';
import style from './customDialogBox.scss'


class CustomDialogBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogFlag: true
        }
        this.closeDialog = this.closeDialog.bind(this);
    }

    componentDidMount() {
        const {setOverLay} = this.props;
        if(this.props.children)
            setOverLay(true);
    }

    closeDialog(event) {
        const { setOverLay,userRequestedAction, userRequestedActionData,
            triggerUserRequestedAction } = this.props;
        this.setState({
            dialogFlag: false
        }, () => {
            setOverLay(false);

            if (!isEmpty(userRequestedAction)) {
                let value = !isEmpty(userRequestedActionData) ? userRequestedActionData : this.state.dialogFlag;
                triggerUserRequestedAction(userRequestedAction, value);
            }
        })

    }
    render() {
        const { name } = this.props;
        const { dialogFlag } = this.state;
        if (isEmpty(name)) return null;
        return (
            dialogFlag ? <div className={`customDialog${name}`}>
                <div className={'customDialog'}>
                    {this.props.children}
                    <span className={'closeButton'} onClick={event => { this.closeDialog() }}>X</span>
                </div>
            </div> : null);
    }
}


const mapDispatchToProps = dispatch => ({
    setOverLay(data) {
        dispatch(setStore("SET_OVERLAY", data))
    },
    triggerUserRequestedAction(action, data) {
        dispatch(setStore(action, data));
    }
})

export default connect(null, mapDispatchToProps)(CustomDialogBox);