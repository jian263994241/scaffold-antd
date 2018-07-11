import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Layout from 'antd/lib/layout';
import LeftMenu from '../../../components/LeftMenu';
import Checkbox from 'antd/lib/checkbox';

const CheckboxGroup = Checkbox.Group;
const { Header, Content, Footer, Sider } = Layout;

export default class PageProjectNeeds extends Component {

  render(){

    return (
      <Layout>
        <LeftMenu/>
        <Content>
          <div>
            业务线:
            <CheckboxGroup>
              <Checkbox value={1}>账户产品中心</Checkbox>
              <Checkbox value={2}>企业金融</Checkbox>
              <Checkbox value={3}>IPO</Checkbox>
              <Checkbox value={4}>其他</Checkbox>
            </CheckboxGroup>

            项目类型：
            <CheckboxGroup>
              <Checkbox value={1}>项目工作</Checkbox>
              <Checkbox value={2}>固定工作</Checkbox>
              <Checkbox value={3}>突发工作</Checkbox>
            </CheckboxGroup>

          </div>

          <div>
            共 6 个  账户产品中心：0     企业金融：3     IPO：3     其他：0
          </div>

          <div>
            快钱支付企业客服-交易结算查询
          </div>
        </Content>
      </Layout>
    )
  }
}
