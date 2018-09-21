import React, {Component} from 'react';

export class Admin extends Component {
    constructor (props) {
        super();
        this.state = props.state;
    }

    render() {
        const {
            changeActivePageToUserPage,
            changeActivePageToShoppingCart
        } = this.props;

        return (
            <div className="container flex-grow-1">
                <div className="row">
                    <div className="col-8">
                        <div className="admin-orders">
                            <h1>ADMIN PAGE</h1>
                            <ul className="list-group">
                                {this.state.goods.map((elem,index) => {
                                    return this.renderListItem(elem, index)
                                })}
                            </ul>
                            <br/>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" className="form-control" placeholder="enter new name"/>
                                <button className="btn btn-primary" onClick={this.addProductToList}>Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <button onClick={changeActivePageToUserPage}>Go to UserPage</button>
                        <button onClick={changeActivePageToShoppingCart}>Go to ShopCart</button>
                    </div>
                </div>
            </div>
        );
    }


    renderListItem (item, index) {
        const displayNone = {
            display: 'none'
        };

        return (
            <li key={index + 1} className="list-group-item">
                <span style={displayNone}>{index}</span>
                <img src="#" alt=""/>
                <a href="#" className="admin-orders__link">
                    {item.name}
                </a>
                <h2 className="float-right btn-link"  onClick={(e) => this.addProductToCart(e)}>✎</h2>
            </li>
        )

    }

    addProductToList = () => {
        this.state.goods.push({name: 'Новый товар'});
        this.setState({
            goods: this.state.goods,
        });
    };


    addProductToCart = (e) => {
        const index = +e.target.parentElement.children[0].textContent;
        this.state.goodsToCart.push(this.state.goods[index]);
        this.setState({
            goodsToCart: this.state.goodsToCart,
        });
    }
}