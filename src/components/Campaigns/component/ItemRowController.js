import React from 'react';
import {connect} from 'react-redux';
import { apiCalls } from '../../../Redux/Api/api';
import ItemRow from './ItemRow';
import { reformatItemRowsData } from '../../../utility/commonUtility';

class ItemRowController extends React.Component {
     constructor(props){
        super(props);
        this.state={
            data:null
        }
    }
    componentDidMount() {
        const {selectedTab:{apiCall}={}} = this.props;
         apiCalls[apiCall]()
        .then(data=>data.json())
        .then(data=>this.setState({data}))
        .catch(err=>console.log(err))
    }

    componentDidUpdate(prevProps) {
        if(prevProps.selectedTab.id !== this.props.selectedTab.id){
            apiCalls[this.props.selectedTab.apiCall]()
            .then(data=>data.json())
            .then(data=>this.setState({data}))
            .catch(err=>console.log(err))
        }
    }

    render() {
        const {data} = this.state; 
        if(!data)return null;
        const reformatedData = reformatItemRowsData(data);

        return (
            <React.Fragment>
                {reformatedData.map((item)=>{
                   return(<ItemRow data={item}/>)
                })}
            </React.Fragment>
        );
    }
}
 
const mstp=(state)=>{
    const {navigation:{selectedTab}={}} = state;
    return {selectedTab};
}

export default connect(mstp,null)(ItemRowController);