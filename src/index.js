import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Inventory } from './stores/Inventory';
import { Provider } from 'mobx-react';
import { GeneralStore } from './stores/GeneralStore';

const agoraInventory = new Inventory()
const generalStore = new GeneralStore()
const stores = {agoraInventory, generalStore}

ReactDOM.render(
<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
