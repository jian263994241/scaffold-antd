import React, {Component, Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import AppLayout from '../../../components/AppLayout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Link from 'react-router-dom/Link';
import queryString from 'query-string';
import Form from 'antd/lib/Form';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Cookie from 'js-cookie';

const FormItem = Form.Item;
const Option = Select.Option;

@inject(({rootStore})=>{
  return {mockData: rootStore.MockDate}
})
export default class SellerCenterShopSetUp extends Component {

  state = {
    step: '1',
    applyType: ''
  }

  //personage, enterprise

  static getDerivedStateFromProps(props, state){
    const userType = Cookie.get('userType') || 'personage';
    const {location} = props;
    const query = queryString.parse(location.search);
    let step =  query.step || '1'
    return { step, applyType: userType}
  }

  goback = ()=>{
    this.props.history.goBack();
  }

  renderStep1 = ()=>{
    const applyType = this.state.applyType;

    return (
      <Fragment>
        <div className="step-bar"></div>

        <Row type="flex" justify="center">
          <Col style={{textAlign:'center', width: 400, padding: '80px 0'}}>
            <div><img src={__uri('/res/images/icon-personage.png')} width="95" alt=""/></div>
            <h3 style={{marginTop: 40}}>个人商户</h3>
            <p>欢迎使用个人账号入驻商户</p>
            <Button type="primary" disabled={applyType != 'personage'}>
              <Link to="/seller-center/shop/set-up?step=2">个人商户入驻</Link>
            </Button>
            {
              applyType != 'personage' && (
                <p style={{marginTop: 20}}>
                  请使用 <Link to="/user/login">个人账户登录</Link> 开店
                </p>
              )
            }
          </Col>

          <Col style={{textAlign:'center', width: 400,  padding: '80px 0'}}>
            <div><img src={__uri('/res/images/icon-enterprise.png')} width="95" alt=""/></div>
            <h3 style={{marginTop: 40}}>企业商户</h3>
            <p>欢迎使用企业账号入驻商户</p>
            <Button type="primary" disabled={applyType != 'enterprise'}>
              <Link to="/seller-center/shop/set-up?step=2">企业商户入驻</Link>
            </Button>
            {
              applyType != 'enterprise' && (
                <p style={{marginTop: 20}}>
                  请使用 <Link to="/user/login">企业账户登录</Link> 开店
                </p>
              )
            }

          </Col>
        </Row>
      </Fragment>
    )
  }

  renderStep2 = ()=>{

    return (
      <Fragment>
        <div className="step-bar s2"></div>
        <div style={{margin: "20px 0"}}>
          <img src={__uri('/res/images/xieyi.png')} width="100%" alt=""/>
        </div>
        <div className="text-center">
          <Button style={{marginRight: 20}} onClick={this.goback}> 上一步 </Button>
          <Button type="primary" >
            <Link to="/seller-center/shop/set-up?step=3">确认协议，继续开店</Link>
          </Button>
        </div>
      </Fragment>
    )
  }

  renderStep3 = ()=>{
    const formItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 6 } };
    const formItemLayout2 = { labelCol: { span: 8 }, wrapperCol: { span: 14 } };
    const titleStyle = {fontWeight: 'bold', background: '#FDFDFE', border: '1px solid #EAEAFC', borderBottom: 0, borderRadius: '4px 4px 0 0', display: 'inline-block', padding: '4px 10px'};
    const sectionStyle = {background: '#FDFDFE', border: '1px solid #EAEAFC', marginBottom: 20, paddingTop: 20, borderRadius: '0 4px 4px 4px'};
    const applyType = this.state.applyType;
    console.log();

    if(applyType === 'personage'){
      return (
        <Fragment>
          <div className="step-bar s3"></div>
          <Form style={{margin: '20px 0'}}>
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
              <Input type="tel" placeholder="请输入"/>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="邮箱"
            >
              <Input type="email" placeholder="请输入"/>
            </FormItem>
            <FormItem wrapperCol={{offset: 7}}>
              <Button style={{marginRight: 20}} onClick={this.goback}> 上一步 </Button>
              <Button type="primary" >
                <Link to="/seller-center/shop/set-up?step=4">确认提交</Link>
              </Button>
            </FormItem>
          </Form>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <div className="step-bar s3"></div>
        <Form style={{margin: '20px 0'}}>
          <div style={titleStyle}>企业信息</div>
          <div style={sectionStyle}>
            <Row type="flex" justify="space-around">
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="企业名称"
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="企业证件类型"
                >
                  <Select value={"rmb"}>
                    <Option value="rmb">营业执照</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="证件号码："
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
            </Row>
            <Row type="flex" justify="space-around">
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="经营地址"
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="成立日期"
                >
                  <Input type="date" placeholder="请输入"/>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="手机号码"
                >
                  <Input type="tel" placeholder="请输入"/>
                </FormItem>
              </Col>
            </Row>
            <Row type="flex" justify="left">
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="邮箱"
                >
                  <Input type="email" placeholder="请输入"/>
                </FormItem>
              </Col>
            </Row>
          </div>
          <div style={titleStyle}>法人信息</div>
          <div style={sectionStyle}>
            <Row type="flex" justify="left">
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="法人姓名"
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="手机号码"
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="身份证号码"
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
            </Row>
          </div>
          <div style={titleStyle}>联系人</div>
          <div style={sectionStyle}>
            <Row type="flex" justify="left">
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="联系人姓名"
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="联系电话"
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem
                  {...formItemLayout2}
                  label="联系地址"
                >
                  <Input type="text" placeholder="请输入"/>
                </FormItem>
              </Col>
            </Row>
          </div>

          <FormItem wrapperCol={{offset: 8}}>
            <Button style={{marginRight: 20}} onClick={this.goback}> 上一步 </Button>
            <Button type="primary" >
              <Link to="/seller-center/shop/set-up?step=4">确认提交</Link>
            </Button>
          </FormItem>
        </Form>
      </Fragment>
    )


  }

  renderStep4 = ()=>{
    return (
      <div style={{width: 350, margin: '0 auto', padding: '60px 0'}}>
        <div style={{textAlign: 'center'}}>
          <img src={__uri('/res/images/smile-g.png')} alt=""/>
          <div style={{margin: '15px 0'}}>
            <b style={{fontSize: 18}}>亲，店铺创建成功啦！祝你生意兴隆！</b>
          </div>
        </div>
      </div>
    )
  }

  render(){
    const step = this.state.step;
    let content = '';
    if(step === '1'){
      content = this.renderStep1();
    }
    if(step === '2'){
      content = this.renderStep2();
    }
    if(step === '3'){
      content = this.renderStep3();
    }

    if(step === '4'){
      content = this.renderStep4();
    }

    return (
      <AppLayout>
        <h2 className="content-title">商户入驻</h2>
        {content}
      </AppLayout>
    )
  }
}
