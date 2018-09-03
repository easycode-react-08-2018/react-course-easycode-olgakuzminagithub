import React, {Component} from 'react';

export class ShoppingCart extends Component {
    constructor (props) {
        super();
        this.state = props.state;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>Shopping Cart</h1>
                        <ul className="list-group">
                            {this.state.goodsToCart.map(good => {
                                return this.renderListItemGroup(good);
                            })}
                        </ul>
                    </div>
                    <div className="col-4">
                        <div>
                            User
                        </div>
                        <button>User Logout</button>
                    </div>
                </div>
                <div className="row">
                    <pre>price:</pre>
                </div>
                <div className="row">
                    <button className="btn btn-primary">Ship it</button>
                </div>
            </div>

        );
    }

    renderListItemGroup(item) {
        return (
            <li className="list-group-item">
                <img src="#" alt=""/>
                <a href="#" className="admin-orders__link">
                    {item.name}
                </a>
                <h2 className="float-right badge-light">✓</h2>
            </li>
        )
    }

}



