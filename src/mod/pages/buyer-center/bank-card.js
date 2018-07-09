import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import AppLayout from '../../components/AppLayout';

export default class BuyerCenterBankCard extends Component {

  render(){

    return (
      <AppLayout>
        <h2 className="content-title">我的银行卡</h2>
        <div>
          <img width="300" src={__uri('/res/images/card.png')} alt=""/>
        </div>
      </AppLayout>
    )
  }
}
