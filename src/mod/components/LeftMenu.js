import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import menuList from '../common/menu';
import NavLink from 'react-router-dom/NavLink';
import matchPath from 'react-router-dom/matchPath';

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
    const match = matchPath(pathname, { path: '/:type' });
    const type = match.params.type;
    this.menuData = menuList[type];
    // this.defaultOpenKeys
    let menu = this.menuData.children;

    menu.every((item, index)=>{
      if(item.children){
        item.children.every((item2, index2)=>{
          if(item2.link === pathname) {
            this.defaultOpenKeys = [`nav-${index}`];
            return false
          };
          return true;
        })
      }
      return true;
    })
  }

  active = (key)=>(match, location)=>{
    if (!match) {
      return false;
    }

    if(!this.selectedKeys){
      setTimeout(()=>this.selectedKeys = [key])
    }

  }

  render(){

    const menuData = this.menuData;
    const list = menuData.children;

    return (
      <Menu
        mode="inline"
        selectedKeys={this.selectedKeys}
        defaultOpenKeys={this.defaultOpenKeys}
        style={{ height: '100%' }}
      >
        {
          list.map((item, index)=>{
            if(item.children){
              return (
                <SubMenu key={`nav-${index}`} title={<span><Icon type="user" />{item.name}</span>}>
                  {
                    item.children && item.children.map((subitem, index2)=>(
                      <Menu.Item key={`nav-${index}-${index2}`}>
                        <NavLink to={subitem.link} isActive={this.active(`nav-${index}-${index2}`)}>{subitem.name}</NavLink>
                      </Menu.Item>
                    ))
                  }
                </SubMenu>
              )
            }
            return (
              <Menu.Item key={`nav-${index}`}>
                <Icon type={item.icon} />
                <NavLink to={item.link} style={{display: 'inline'}} isActive={this.active(`nav-${index}`)} >
                  {item.name}
                </NavLink>
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }
}
