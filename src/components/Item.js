import React, { Component } from 'react'
import { observer } from 'mobx-react';

@observer
class Item extends Component {

    buyItem = event => {
        this.props.store.buyItem(event.target.value)
    }

    changePrice = () => {
        let price = parseInt(prompt("Enter the value for the new price", this.props.item.price))
        this.props.store.changePrice(this.props.item.name, price)
    }

    conditionalPlural = text => this.props.item.quantity > 1 ? text : ""

    render(){
        let item = this.props.item
        return (<li>
            {item.quantity} <span className="item" onDoubleClick={this.changePrice}>
                {item.name}{this.conditionalPlural("s")}
            </span> available at ${item.price}{this.conditionalPlural(" per item")}. 
            <button value={item.name} onClick={this.buyItem}>Buy!</button>
        </li>)
    }
}

export default Item