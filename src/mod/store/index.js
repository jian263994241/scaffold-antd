import { RouterStore } from 'mobx-react-router';
import Mock from './Mock';

class Store {

  constructor (){

    this.routingStore = new RouterStore();
    this.mock = new Mock(this);

  }
}


const store = new Store();

export default store;
