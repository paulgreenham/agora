import React, { Component } from 'react'
import Item from './Item';
import { observer, inject } from 'mobx-react';

@inject("agoraInventory", "generalStore")
@observer
class Market extends Component {

    handleInput = event => {
        this.props.generalStore.handleInput(event.target.value)
    }

    addItem = event => {
        if (event.key === "Enter") {
            this.props.agoraInventory.addItem(this.props.generalStore.name)
            this.props.generalStore.handleInput("")
        }
    }

    render(){
        return (<div>
            <input type="text" value={this.props.generalStore.name} onChange={this.handleInput} onKeyPress={this.addItem}/>
            {this.props.agoraInventory.items.map(i => <Item item={i} key={i.name} />)}
        </div>)
    }
}

export default Market