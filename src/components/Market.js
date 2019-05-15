import React, { Component } from 'react'
import Item from './Item';
import { observer } from 'mobx-react';

@observer
class Market extends Component {
    constructor() {
        super()
        this.state = {
            newItem: ""
        }
    }

    handleInput = event => this.setState({ newItem: event.target.value })

    addItem = event => {
        if (event.key === "Enter") {
            this.props.store.addItem(this.state.newItem)
            this.setState({ newItem: "" })
        }
    }

    render(){
        return (<div>
            <input type="text" value={this.state.newItem} onChange={this.handleInput} onKeyPress={this.addItem}/>
            {this.props.store.items.map(i => <Item item={i} key={i.name} store={this.props.store}/>)}
        </div>)
    }
}

export default Market