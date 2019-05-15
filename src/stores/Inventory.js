import { observable, action } from 'mobx'
import { Item } from './Item';

export class Inventory {
    @observable items = []

    @action addItem = (name, price = 0, quantity = 1) => {
        let item = this.items.find(i => i.name === name)
        if (item) { item.quantity += quantity }
        else { this.items.push(new Item(name, price, quantity))}
    }

    @action buyItem = name => {
        let item = this.items.find(i => i.name === name)
        if (item.quantity > 1) { item.quantity -- }
        else this.items.splice(this.items.findIndex(i => i.name === name), 1)
    }

    @action changePrice = (name, price) => {
        let item = this.items.find(i => i.name === name)
        item.price = price
    }
}