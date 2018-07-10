import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import AppLayout from '../../components/AppLayout';
import Icon from 'antd/lib/icon';
import Link from 'react-router-dom/Link';

@observer
export default class IndexPage extends Component {

  render() {
    const {children} = this.props;

    return (
      <AppLayout>
        {children}
      </AppLayout>
    );
  }
}
