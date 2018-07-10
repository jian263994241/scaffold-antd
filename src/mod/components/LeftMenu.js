import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
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

  @observable selectedKeys = null;
  @observable type = '';

  constructor(props){
    super(props);
    this.routing = props.routing;
    const pathname = this.routing.location.pathname;
    this.defaultSelectedKeys = [pathname];
  }

  handleClick = ({ item, key, keyPath })=>{
    this.routing.push(key);
  }

  render(){

    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          style={{ height: '100%' }}
          defaultSelectedKeys={this.defaultSelectedKeys}
          onClick={this.handleClick}
        >
          <Menu.Item key="/project/needs"> <Icon type="" /> 需求池 </Menu.Item>
          <Menu.Item key="/project/progress"> <Icon type="" /> 进行中的项目 </Menu.Item>
          <Menu.Item key="/project/completed"> <Icon type="" /> 已完成的项目 </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
