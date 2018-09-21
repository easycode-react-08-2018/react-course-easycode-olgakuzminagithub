import React, {Component} from 'react';

export class UserPage extends Component {
    constructor (props) {
        super();
        this.state = props.state;
    }

    render() {
        const {goods} = this.state;

        const {
            changeActivePageToShoppingCart
        } = this.props;

        return (
            <div className="container">
                <h1>USER PAGE</h1>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            {goods.map((good, index) => {
                                return this.renderCard(good, index)
                            })}
                        </div>
                    </div>
                    <div className="col-4">
                        <button onClick={changeActivePageToShoppingCart}>Go to ShopCart</button>
                    </div>
                </div>
            </div>
        );
    }
    renderCard (item, index) {
        const displayNone = {
            display: 'none'
        };

        return (
            <div className="card">
                <div className="card-body">
                    <span style={displayNone}>{index}</span>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.name}</p>
                    <button onClick={(e) => this.addProductToCart(e)}>Buy</button>
                    <h3 className="text-success"> </h3>
                </div>
            </div>
        )
    }

    addProductToCart = (e) => {
        const index = +e.target.parentElement.children[0].textContent;
        const confirmation = e.target.parentElement.children[4];
        confirmation.innerHTML = '✔';
        this.state.goodsToCart.push(this.state.goods[index]);
        this.setState({
            goodsToCart: this.state.goodsToCart,
        });
    }
}
