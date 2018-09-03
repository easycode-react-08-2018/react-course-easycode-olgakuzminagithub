import React, {Component} from 'react';

import './App.css';
import './pages/admin-page.js';
import {Admin} from "./pages/admin-page";
import {UserPage} from "./pages/user-page";
import {ShoppingCart} from "./pages/shopping-cart-page";
import {MainPage} from "./pages/home-page";

class App extends Component {
    constructor () {
        super();

        this.state = {
            activePage: 'home-page',
            goods: [{name: 'MacBook pro 2018'}, {name: 'Dell xs'}, {name: 'Microsoft Surface'}],
            goodsToCart: []
        }
    }

    changeActivePageToAdminPage = () => {
        this.setState({
            activePage: 'admin-page',
        })
    };

    changeActivePageToUserPage = () => {
        this.setState({
            activePage: 'user-page'
        })
    };

    changeActivePageToShoppingCart = () => {
        this.setState({
            activePage: 'shopping-cart'
        })
    };

    render() {
        if (this.state.activePage === 'home-page') {
            return <MainPage
                changeActivePageToAdminPage ={this.changeActivePageToAdminPage}
                changeActivePageToUserPage ={this.changeActivePageToUserPage}
            />
        }

        if (this.state.activePage === 'admin-page') {
            return <Admin
                state = {this.state}
                changeActivePageToUserPage = {this.changeActivePageToUserPage}
                changeActivePageToShoppingCart = {this.changeActivePageToShoppingCart}
            />
        }

        if (this.state.activePage === 'user-page') {
            return <UserPage
                state = {this.state}
                changeActivePageToShoppingCart = {this.changeActivePageToShoppingCart}
            />
        }

        if (this.state.activePage === 'shopping-cart') {
            return <ShoppingCart
                state = {this.state}
            />
        }
    }
}

export default App;

