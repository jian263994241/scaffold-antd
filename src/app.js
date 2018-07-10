import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import createHashHistory from 'history/createHashHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import Router from 'react-router-dom/Router';
import Route from 'react-router-dom/Route';

import store from './mod/store';
import pages from './mod/pages';
import AppLayout from './mod/components/AppLayout';

import {observer, Provider} from 'mobx-react';

const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, store.routingStore);

@observer
class App extends Component {
  render() {
    return (
      <Provider rootStore={store}>
        <Router history={history}>
          <AppLayout>
            {
              pages.map((item, index)=>( <Route key={index} {...item}/> ))
            }
          </AppLayout>
        </Router>
      </Provider>
    );
  }
}


render(<App/>, document.querySelector('.root'));
