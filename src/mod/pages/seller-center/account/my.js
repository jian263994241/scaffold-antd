import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Tabs from 'antd/lib/tabs';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import AppLayout from '../../../components/AppLayout';
import Link from 'react-router-dom/Link';

const TabPane = Tabs.TabPane;

@inject(({rootStore})=>{
  return {mock: rootStore.mock}
})
@observer
export default class SellerCenterAccountMy extends Component {

  render(){

    const columns = [{
      title: '入账时间',
      dataIndex: 'recordTime'
    }, {
      title: '交易号',
      className: 'column-money',
      dataIndex: 'tradeNo',
    }, {
      title: '商品名称',
      dataIndex: 'name',
    },{
      title: '卖家信息',
      dataIndex: 'seller',
    },{
      title: '账务类型',
      dataIndex: 'type',
    },{
      title: '收支金额（元）',
      dataIndex: 'money',
    },{
      title: '账户余额（元）',
      dataIndex: 'balance',
    }];

    const data = [
      {
        key: 1,
        recordTime: '2018-06-06 09:22:45',
        tradeNo: '20180606...4056',
        name: '德国进口欧德堡超高温灭菌3.5%全脂纯牛奶 200ml*24',
        seller: '沃尔玛超市',
        type: '消费',
        money: '31.00',
        balance: '31.00'
      },
      {
        key: 2,
        recordTime: '2018-06-06 22:47:44',
        tradeNo: '20180606...4038',
        name: '德国进口欧德堡超高温灭菌3.5%全脂纯牛奶 200ml*24',
        seller: '沃尔玛超市',
        type: '消费',
        money: '24.00',
        balance: '55.00'
      }
    ];

    const mock = this.props.mock;

    return (
      <AppLayout>
        <h2 className="content-title">我的账户</h2>

        <div className="sec">
          <h3 className="sec-title">账户余额</h3>

          <div style={{border: '1px solid #EFEFFC', margin: '10 0'}}>
            <Row>
              <Col span={4} style={{backgroundColor: '#FCFCFF', padding: 20, borderRight: '1px solid #EFEFFC'}}>
                <div style={{fontSize: 12, color: '#000'}}>
                  <div style={{marginBottom: 10}}>钱包账户：Jay.Liu</div>
                  <div>安全等级：高</div>
                </div>
              </Col>
              <Col span={6} offset={1} style={{padding: 18}}>
                <div>
                  <div style={{color: 'red', fontSize: 20}}>￥{mock.mjPrice}</div>
                  <span style={{color: '#939393', fontSize: 12}}>可用余额(元)</span>
                </div>
              </Col>
              <Col span={12} style={{padding: 20}}>
                <Button size="large">
                  <Link to="/seller-center/account/presentation">提现</Link>
                </Button>
              </Col>
            </Row>
          </div>
        </div>

        <div className="sec">
          <h3 className="sec-title">账户明细</h3>
          <Tabs type="card">
            <TabPane tab="全部" key="1">
              <Table
                columns={columns}
                dataSource={data}
                bordered
              />
            </TabPane>
            <TabPane tab="收入" key="2">
              <Table
                columns={columns}
                dataSource={data}
                bordered
              />
            </TabPane>
            <TabPane tab="支出" key="3">
              <Table
                columns={columns}
                dataSource={data}
                bordered
              />
            </TabPane>
          </Tabs>
        </div>

      </AppLayout>
    )
  }
}
