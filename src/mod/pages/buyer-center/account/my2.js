import React, {Component,Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Tabs from 'antd/lib/tabs';
import Table from 'antd/lib/table';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import AppLayout from '../../../components/AppLayout';
import Link from 'react-router-dom/Link';
import queryString from 'query-string';
import Form from 'antd/lib/Form';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

export default class BuyerCenterAccountMy extends Component {

  state = {
    pageType: '0'
  }

  static getDerivedStateFromProps(props, state){
    const {location} = props;
    const query = queryString.parse(location.search);
    let pageType = query.apply || '0';

    return { pageType }
  }

  goback = ()=>{
    this.props.history.goBack();
  }

  renderPage0 = ()=>(
    <div style={{width: 250, margin: '0 auto', padding: '90px 0'}}>
      <div style={{textAlign: 'center'}}>
        <img src={__uri('/res/images/my-bgicon.png')} width={96} alt=""/>
        <div style={{margin: '15px 0'}}>
          <b style={{fontSize: 18}}>您还没有开立电子钱包账户哦~</b>
        </div>
      </div>

      <div style={{textAlign: 'center'}}>
        <Button type="primary" htmlType="submit">
          <Link to='/buyer-center/account/my2?apply=1'>开立电子钱包账户</Link>
        </Button>
      </div>
    </div>
  )

  renderPage1 = ()=>{
    return (
      <Fragment>
        <div className="my-step-bar"></div>
        <div style={{margin: "20px 0"}}>
          <img src={__uri('/res/images/xieyi.png')} width="100%" alt=""/>
        </div>
        <div className="text-center">
          <Button style={{marginRight: 20}} onClick={this.goback}> 上一步 </Button>
          <Button type="primary" >
            <Link to="/buyer-center/account/my2?apply=2">确认协议，下一步</Link>
          </Button>
        </div>
      </Fragment>
    )
  }

  renderPage2 = ()=>{
    const formItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 6 } };
    return (
      <Fragment>
        <div className="my-step-bar s1"></div>
        <Form style={{margin: '20px 0'}}>
          <FormItem
            {...formItemLayout}
            label="银行卡卡号"
          >
            <Input type="text" placeholder="请输入"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="姓名"
          >
            <Input type="text" placeholder="请输入本人真实姓名"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="证件类型"
          >
            <Select value={"rmb"}>
              <Option value="rmb">居民身份证</Option>
            </Select>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="证件号码"
          >
            <Input type="text" placeholder="请输入持卡人证件号码"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="手机号码"
          >
            <Input type="tel" placeholder="请输入银行预留手机号"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="验证码"
          >
            <Input type="text" placeholder="请输入" addonAfter={<span>获取验证码</span>}/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="交易密码"
          >
            <Input type="password" placeholder="设置支付、提现时的交易密码"/>
          </FormItem>
          <FormItem wrapperCol={{offset: 7}}>
            <Button style={{marginRight: 20}} onClick={this.goback}> 上一步 </Button>
            <Button type="primary" >
              <Link to="/buyer-center/account/my2?apply=3">确认提交</Link>
            </Button>
          </FormItem>
        </Form>
      </Fragment>
    )
  }

  renderPage3 = ()=>{
    return (
      <div style={{width: 350, margin: '0 auto', padding: '60px 0'}}>
        <div style={{textAlign: 'center'}}>
          <img src={__uri('/res/images/smile-g.png')} alt=""/>
          <div style={{margin: '15px 0'}}>
            <b style={{fontSize: 18}}>亲，电子钱包账户创建成功啦！</b>
          </div>
        </div>
      </div>
    )
  }

  render(){
    const pageType = this.state.pageType;
    let content = this.renderPage0();

    if(pageType === '1'){
      content = this.renderPage1();
    }

    if(pageType === '2'){
      content = this.renderPage2();
    }

    if(pageType === '3'){
      content = this.renderPage3();
    }

    return (
      <AppLayout>
        <h2 className="content-title">我的账户</h2>
        {content}
      </AppLayout>
    )
  }
}
