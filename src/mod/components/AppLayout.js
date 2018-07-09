import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import Layout from 'antd/lib/layout';

import Affix from 'antd/lib/affix';
import TopMenu from './TopMenu';
import LeftMenu from './LeftMenu';
import Breadcrumb from './breadcrumb';

const { Header, Content, Footer, Sider } = Layout;

export default class AppLayout extends PureComponent {

  static defaultProps = {
    leftmenu: true,
    breadcrumb: true,
  }

  render() {

    const {children, leftmenu, breadcrumb, bgc} = this.props;

    return (
      <Layout className={bgc}>
        <Affix>
          <Header className="header">
            
            <TopMenu/>
          </Header>
        </Affix>

        <Content style={{ padding: '0 50px' }}>
          {breadcrumb && <Breadcrumb/>}
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            {
              leftmenu && (
                <Sider width={200} style={{ background: '#fff' }}>
                  <LeftMenu/>
                </Sider>
              )
            }
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer> */}
      </Layout>
    )
  }
}
