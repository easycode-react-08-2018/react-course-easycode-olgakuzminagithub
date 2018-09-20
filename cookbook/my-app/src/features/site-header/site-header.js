import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './site-header.css';

import { userActions } from '../../store/action/login-actions/user.actions';

export class HeaderComponents extends Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const standartLogo = "http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/user2-add-icon.png";

        const { user } = this.props;

        return (
            <div className="Site-header">
                <div className="User-login">{user ? user.user.name : '  '}</div>
                <div className="Right-part">
                    {user ? <Link to="/login" className="Sing-out">Logout</Link> : <div className="Sing-out">SingUp</div> }
                    <div className="Logo">
                        <img  src={standartLogo}></img>
                        <p>Logo</p>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
};

export const Header = connect(mapStateToProps)(HeaderComponents);