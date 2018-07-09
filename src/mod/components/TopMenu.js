import React, {Component, PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import matchPath from 'react-router-dom/matchPath';
import Link from 'react-router-dom/Link';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import menuList from '../common/menu';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

@inject(({rootStore})=>({
  routing: rootStore.routingStore
}))
@observer
export default class TopMenu extends Component{

  constructor(props){
    super(props);
    this.list = Object.values(menuList);
    this.routing = this.props.routing;
    const pathname = this.routing.location.pathname;
    this.list.every((item, index)=>{
      let match = matchPath(pathname, {
        path: item.path,
        exact: item.path ==='/'
      });
      if(match){
        this.defaultSelectedKeys = String(index);
      }
      return !match;
    });
  }

  render(){

    const {
      routing
    } = this.props;

    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col span={3}>
          <div style={{float:'left', color: '#eee', fontSize: 14, marginRight: 20, height: 63, overflow:'hidden'}}>平台商城MOCK系统</div>
        </Col>
        <Col span={18}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.defaultSelectedKeys]}
            style={{ lineHeight: '64px' }}
          >
            {
              this.list.map((item, index)=>(
                <Menu.Item key={index} >
                  <Link to={item.link}>{item.name}</Link>
                </Menu.Item>
              ))
            }
          </Menu>
        </Col>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
            selectable={false}
            >
            <Menu.Item key={'usr'}> Jay.Liu</Menu.Item>
            <Menu.Item key={'logout'}>
              <Link to="/user/login">登出</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>

    )
  }
}
