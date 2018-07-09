import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Link from 'react-router-dom/Link';
import AppLayout from '../../../components/AppLayout';
import Form from 'antd/lib/Form';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import queryString from 'query-string';

const FormItem = Form.Item;
const Option = Select.Option;


export default class BuyerCenterRecharge extends Component {

  state = {
    pageType: 'form'
  }

  static getDerivedStateFromProps(props, state){
    const {location} = props;
    const query = queryString.parse(location.search);
    let pageType = '';
    if(query.result === '1'){
      pageType = 'info';
    }else{
      pageType = 'form';
    }
    return { pageType }
  }

  renderForm = ()=>{
    const formItemLayout = {
      labelCol: {
        span: 7
      },
      wrapperCol: {
        span: 6
      },
    };

    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="扣款银行卡"
        >
          <Select value={"rmb"}>
            <Option value="rmb">招商银行储蓄卡（5548）</Option>
          </Select>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="充值金额"
        >
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="交易密码"
        >
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type="primary" htmlType="submit">
            <Link to='/buyer-center/account/recharge?result=1'>提交</Link>
          </Button>
        </FormItem>
      </Form>
    )
  }

  renderInfo = ()=>{

    return (
      <div style={{width: 250, margin: '0 auto', padding: '90px 0'}}>
        <div style={{textAlign: 'center'}}>
          <img src={__uri('/res/images/smile-g.png')} alt=""/>
          <div style={{margin: '15px 0'}}>
            <b style={{fontSize: 18}}>充值成功</b>
          </div>
        </div>
        <p>
        充值金额：  <b>￥1000.00</b> <br/>
        付款方式：  招商银行储蓄卡 (5548) <br/>
        交易时间：  2018.05.18  12:30:89
        </p>
        <div style={{textAlign: 'center'}}>
          <Button type="primary" htmlType="submit">
            <Link to='/buyer-center/account/recharge'>继续充值</Link>
          </Button>
        </div>
      </div>
    )
  }

  render(){



    return (
      <AppLayout>
        <h2 className="content-title">账户充值</h2>
        {this.state.pageType === 'form' ? this.renderForm(): this.renderInfo()}
      </AppLayout>
    )
  }
}
