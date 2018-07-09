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
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

@inject(({rootStore})=>{
  return {mock: rootStore.mock}
})
@observer
export default class BackstageManagementChecking extends Component {

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

    return (
      <AppLayout>
        <h2 className="content-title">对账管理</h2>
        <div>
          <Table
            // rowSelection={rowSelection}
            columns={columns}
            dataSource={mock.FZdata}
          />
        </div>
      </AppLayout>
    )
  }
}
