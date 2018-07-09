import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import AppLayout from '../../../components/AppLayout';
import Form from 'antd/lib/Form';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import queryString from 'query-string';
import Link from 'react-router-dom/Link';

const FormItem = Form.Item;
const Option = Select.Option;

export default class BuyerCenterPresentation extends Component {

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
          label="提到银行卡"
        >
          <Select value={"rmb"}>
            <Option value="rmb">招商银行储蓄卡（5548）</Option>
          </Select>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="账户可取现余额"
        >
          <span style={{marginRight: 20}}>1800.00元</span>

          <Button>全部取出</Button>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="提现金额"
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
            <Link to='/buyer-center/account/presentation?result=1'>提交</Link>
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
            <b style={{fontSize: 18}}>提现成功</b>
          </div>
        </div>
        <p>
          提现金额：  <b>￥55.00</b> <br/>
          付款方式：  招商银行储蓄卡 (5548) <br/>
          {/* 交易时间：  2018.06.29  12:30:45 */}
        </p>
        <div style={{textAlign: 'center'}}>
          <Button type="primary" htmlType="submit">
            <Link to='/buyer-center/account/presentation'>继续提现</Link>
          </Button>
        </div>
      </div>
    )
  }

  render(){



    return (
      <AppLayout>
        <h2 className="content-title">账户提现</h2>
        {this.state.pageType === 'form' ? this.renderForm(): this.renderInfo()}
      </AppLayout>
    )
  }
}
