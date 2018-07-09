import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import AppLayout from '../../components/AppLayout';
import Icon from 'antd/lib/icon';
import Link from 'react-router-dom/Link';

@observer
export default class IndexPage extends Component {

  render() {
    return (
      <AppLayout leftmenu={false} breadcrumb={false} bgc="bodybgw">
        <div className="index-box-group">
          <div className="index-box bg1">
            <ul>
              <li>
                <Link to="/seller-center/shop/set-up">
                  <Icon type="inbox"/>
                  商户入驻
                </Link>

              </li>
              <li>
                <Link to="/seller-center/account/my">
                  <Icon type="user"/>
                  我的账户
                </Link>
                <Link className="mo" to="/seller-center/account/presentation">账户提现</Link>
              </li>
              <li>
                <Link to="/seller-center/bank-card">
                  <Icon type="credit-card"/>
                  我的银行卡
                </Link>
              </li>
            </ul>
          </div>
          <div className="index-box bg2">
            <ul>
              <li>
                <Link to="/buyer-center/account/my">
                  <Icon type="user"/>
                  我的账户
                </Link>
                <div>
                  <Link className="mo" to="/buyer-center/account/recharge">账户充值</Link>
                  <Link className="mo" to="/buyer-center/account/presentation">账户提现</Link>
                </div>

              </li>
              <li>
                <Link to="/buyer-center/bank-card">
                  <Icon type="credit-card"/>
                  我的银行卡
                </Link>
              </li>
              <li>
                <Link to="/buyer-center/shopping-cart">
                  <Icon type="shopping-cart"/>
                  我的购物车
                </Link>
              </li>
            </ul>
          </div>
          <div className="index-box bg3">
            <ul>
              <li>
                <Link to="/backstage-management/ledger">
                  <Icon type="share-alt"/>
                  分账管理
                </Link>
              </li>
              <li>
                <Link to="/backstage-management/checking">
                  <Icon type="profile" />
                  对账管理
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </AppLayout>
    );
  }
}
