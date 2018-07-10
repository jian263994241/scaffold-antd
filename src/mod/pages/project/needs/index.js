import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Layout from 'antd/lib/layout';
import LeftMenu from '../../../components/LeftMenu';

const { Header, Content, Footer, Sider } = Layout;

export default class PageNeeds extends Component {

  render(){

    return (
      <Layout>
        <LeftMenu/>
        <Content>
          123
        </Content>
      </Layout>
    )
  }
}
