import React, {Component, PureComponent} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import matchPath from 'react-router-dom/matchPath';
import Layout from 'antd/lib/layout';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

@inject(({rootStore})=>({
  routing: rootStore.routingStore
}))
@observer
export default class LeftMenu extends Component{

  handleClick = ({ item, key, keyPath })=>{
    this.props.routing.push(key);
  }

  render(){

    const {routing} = this.props;

    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          style={{ height: '100%' }}
          defaultSelectedKeys={[routing.location.pathname]}
          onClick={this.handleClick}
        >
          <Menu.Item key="/project/needs"> <Icon type="laptop" /> 需求池 </Menu.Item>
          <Menu.Item key="/project/progress"> <Icon type="table" /> 进行中的项目 </Menu.Item>
          <Menu.Item key="/project/completed"> <Icon type="paper-clip" /> 已完成的项目 </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
