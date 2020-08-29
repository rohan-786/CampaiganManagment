import React from 'react';
import style from './header.scss';
import Logo from '../../shared/logo';
import { connect } from 'react-redux';
import { setStore } from '../../../Actions/Action';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInClicked: false
        }
        this.setFieldValue = this.setFieldValue.bind(this);
    }
    setFieldValue(name, value) {
        const { setSignInClicked } = this.props;
        this.setState({
            signInClicked: value
        }, () => {
            setSignInClicked(this.state.signInClicked);
        })


    }
    render() {
        return (
            <div className={'siteHeader'}>
                <Logo />
            </div>
        );
    }
}


const mapDispatchToProps = (disptch) => ({
    setSignInClicked(value) {
        disptch(setStore("SET_SIGN_IN_CLICKED", value));
    }
})


export default connect(null, mapDispatchToProps)(Header);