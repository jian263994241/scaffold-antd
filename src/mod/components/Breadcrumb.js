import React, {Component, PureComponent} from 'react';
import Breadcrumb from 'antd/lib/breadcrumb';
import {inject, observer} from 'mobx-react';
import matchPath from 'react-router-dom/matchPath';
import menuList from '../common/menu';

@inject(({rootStore})=>({
  routing: rootStore.routingStore
}))
@observer
export default class CunstomBreadcrumb extends Component {

  constructor(props){
    super(props);
    this.routing = props.routing;
    const pathname = this.routing.location.pathname;
    const match = matchPath(pathname, { path: '/:type' });
    const type = match.params.type;
    this.menuData = menuList[type];
  }

  render(){

    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>{this.menuData.name}</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
