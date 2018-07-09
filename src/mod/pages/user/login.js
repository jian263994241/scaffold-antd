import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Link from 'react-router-dom/Link';
import Radio from 'antd/lib/radio';
import Cookie from 'js-cookie';

const RadioGroup = Radio.Group;

@observer
export default class LoginPage extends Component {

  login = (e)=>{
    const {history} = this.props;
    Cookie.set('userType', e.target.userType.value);
    history.push('/');
  }

  render() {
    return (
      <div className="login-wapper">
        <div className="login-inner">
          <div className="login-title">Welcome! <br/> 平台商城MOCK系统 </div>
          <form onSubmit={this.login}>
            <div className="login-inputs">
              <Input
                className="login-input"
                placeholder="用户名/手机号"
                type="text"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              <Input
                className="login-input"
                placeholder="密码"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
              />
            </div>
            <RadioGroup style={{marginTop: 15}} defaultValue="personage" name="userType">
              <Radio value="personage">个人账户</Radio>
              <Radio value="enterprise">企业账户</Radio>
            </RadioGroup>
            <button className="login-btn" type="submit">
              登录
            </button>

          </form>

        </div>
      </div>
    );
  }
}
