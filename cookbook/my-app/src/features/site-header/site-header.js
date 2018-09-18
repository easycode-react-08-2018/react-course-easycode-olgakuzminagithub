import React, { Component } from 'react';
import './site-header.css';

export class Header extends Component {
    render() {
        const standartLogo = "http://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/user2-add-icon.png";
        return (
            <div className="Site-header">
                <div className="User-login">User login</div>
                <div className="Right-part">
                    <div className="Sing-out">Sign out</div>
                    <div className="Logo">
                        <img  src={standartLogo}></img>
                        <p>Logo</p>
                    </div>
                </div>
            </div>
        )
    }
}