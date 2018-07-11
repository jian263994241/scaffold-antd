import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Collapse from 'antd/lib/collapse';

const Panel = Collapse.Panel;

export default class PageUsersDashboard extends Component {

  render(){

    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden',
    };

    return (
      <div>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="交互组" key="1" style={customPanelStyle}>
            <p>111</p>
          </Panel>
          <Panel header="设计组" key="2" style={customPanelStyle}>
            <p>2222</p>
          </Panel>
          <Panel header="前端组" key="3" style={customPanelStyle}>
            <p>44444</p>
          </Panel>
        </Collapse>,
      </div>
    )
  }
}
