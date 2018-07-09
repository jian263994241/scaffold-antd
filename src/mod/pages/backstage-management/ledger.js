import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import AppLayout from '../../components/AppLayout';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

const columns = [{
  title: '订单编号',
  dataIndex: 'no',
}, {
  title: '商户名称',
  dataIndex: 'name',
}, {
  title: '商品名称',
  dataIndex: 'name2',
}, {
  title: '订单金额',
  dataIndex: 'price',
}, {
  title: '分账总金额',
  dataIndex: 'total',
}, {
  title: '分账商户 | 分账金额',
  dataIndex: 'f2',
}
];


@inject(({rootStore})=>{
  return {mock: rootStore.mock}
})
@observer
export default class BackstageManagementLedger extends Component {

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render(){

    const { loading, selectedRowKeys } = this.state;
     const rowSelection = {
       selectedRowKeys,
       onChange: this.onSelectChange,
     };
     const hasSelected = selectedRowKeys.length > 0;

     const mock = this.props.mock;

     console.log(mock);

    return (
      <AppLayout>
        <h2 className="content-title">分账管理</h2>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={mock.FZdata}
            footer={()=>(
              <Row type="flex" justify="end">
                <Col span={2} pull={2}>已选 <span style={{color: '#F74316', fontSize: 20}}>{selectedRowKeys.length}</span> 条</Col>
                <Col span={2} style={{position: 'relative'}}>
                  <span className="btn-fenz" onClick={()=>{mock.mjPrice = '295.00' ; alert('分账成功')}}>分账</span>
                </Col>
              </Row>
            )}
          />
        </div>
      </AppLayout>
    )
  }
}
