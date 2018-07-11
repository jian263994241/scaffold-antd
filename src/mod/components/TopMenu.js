import React, {Component, PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import matchPath from 'react-router-dom/matchPath';
import Link from 'react-router-dom/Link';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import AddProjectPop from './AddProjectPop';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@inject(({rootStore})=>({
  routing: rootStore.routingStore
}))
@observer
export default class TopMenu extends Component{

  state = {
    addProjectOpened:  false
  }

  openAddProjectPop = ()=>{
    this.setState({
      addProjectOpened: true
    })
  }

  closeAddProjectPop = ()=>{
    this.setState({
      addProjectOpened: false
    })
  }

  getSelectKey = ()=>{
    const { routing } = this.props;
    const pathname = routing.location.pathname;
    const matched = matchPath(pathname, {path: '/:key'});
    return matched && matched.params.key ;
  }

  render(){

    return (
      <Fragment>
        <Row type="flex" justify="space-between" align="middle">
          <Col span={16}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[this.getSelectKey()]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="project">
                <Link to="/project/needs"> <Icon type="schedule" /> 项目</Link>
              </Menu.Item>
              <Menu.Item key="users">
                <Link to="/users/dashboard"> <Icon type="team" />  人员</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
              selectable={false}
            >
              <Menu.Item onClick={this.openAddProjectPop}>
                <Icon type="plus-circle-o" /> 创建项目
              </Menu.Item>
              <SubMenu title={<span> Jay.Liu</span>}>
                <Menu.Item key="setting:1"><Link to="/user/login">登出</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
        <AddProjectPop visible={this.state.addProjectOpened} onCancel={this.closeAddProjectPop} />
      </Fragment>
    )
  }
}
