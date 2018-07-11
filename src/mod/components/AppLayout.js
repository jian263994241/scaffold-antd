import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import Layout from 'antd/lib/layout';

import Affix from 'antd/lib/affix';
import TopMenu from './TopMenu';
import LeftMenu from './LeftMenu';

const { Header, Content, Footer, Sider } = Layout;

export default class AppLayout extends Component {

  render() {

    const {children} = this.props;

    return (
      <Layout>
        <Affix>
          <Header className="header">
            <TopMenu/>
          </Header>
        </Affix>
        <Content style={{ padding: '0 50px' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}
