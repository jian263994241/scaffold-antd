import React, {Component, Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import AppLayout from '../../components/AppLayout';
import Checkbox from 'antd/lib/checkbox';
import InputNumber from 'antd/lib/input-number';
import Link from 'react-router-dom/Link';
import Form from 'antd/lib/Form';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import queryString from 'query-string';

const FormItem = Form.Item;
const Option = Select.Option;

@observer
export default class BuyerCenterShoppingCart extends Component {

  @observable data = [
    {
      shopName: '沃尔玛超市1',
      items : [
        {
          name: '德国进口欧德宝超高温灭菌3.5%全脂纯 牛奶 200ml*24',
          img: __uri('/res/images/demo1.png'),
          price: '4988',
          num: '1'
        },
        {
          name: '德国进口欧德宝超高温灭菌3.5%全脂纯 牛奶 200ml*24',
          img: __uri('/res/images/demo1.png'),
          price: '4988',
          num: '1'
        }
      ]
    },
    {
      shopName: '沃尔玛超市2',
      items : [
        {
          name: '德国进口欧德宝超高温灭菌3.5%全脂纯 牛奶 200ml*24',
          img: __uri('/res/images/demo1.png'),
          price: '4988',
          num: '1'
        },
        {
          name: '德国进口欧德宝超高温灭菌3.5%全脂纯 牛奶 200ml*24',
          img: __uri('/res/images/demo1.png'),
          price: '4988',
          num: '1'
        }
      ]
    }
  ];

  @observable allChecked = false;
  @observable numTotal = 0;
  @observable priceTotal = 0;

  state = {
    pageType: 'cart'
  }

  static getDerivedStateFromProps(props, state){
    const {location} = props;
    const query = queryString.parse(location.search);
    let pageType = '';
    if(query.result === '1'){
      pageType = 'info';
    }else if(query.pay === '1'){
      pageType = 'pay';
    }else{
      pageType = 'cart';
    }
    return { pageType }
  }

  removeItem = (group, index, index2)=> ()=>{
    this.arrayRemove(group.items, index2);
    if(group.items.length === 0){
      this.arrayRemove(this.data, index);
    }
    this.total();
  }

  numChange = (item)=>(value)=>{
    item.num = String(value);

    this.total();
  }

  itemSelect = (group ,item)=>(e)=>{
    item.checked = e.target.checked;
    if(!item.checked){
      group.checked = false;
      this.allChecked = false;
    }
    this.total();
  }

  itemSelectShopAll = (group)=>(e)=>{
    group.checked =  e.target.checked;
    group.items.forEach((item)=>{
      item.checked = e.target.checked;
    });

    if(!group.checked){
      this.allChecked = false;
    }
    this.total();
  }

  itemSelectAll = (e)=>{
    let numTotal = 0;
    this.allChecked = e.target.checked;
    this.data.forEach((group)=>{
      group.checked = e.target.checked;
      group.items.forEach((item)=>{
        item.checked = e.target.checked;
      });
    });

    this.total();
  }

  total = ()=>{
    let numTotal = 0, priceTotal = 0;
    this.data.forEach((group)=>{
      group.items.forEach((item)=>{
        if(item.checked){
          numTotal += Number(item.num);
          priceTotal += (Number(item.price) * Number(item.num));
        }
      });
    });

    this.numTotal = numTotal;
    this.priceTotal = priceTotal;
  }

  arrayRemove = (arr, index)=>{
    arr.splice(index, index+1);
  }

  renderShopCart = ()=>{

    return (
      <Fragment>
        <h2 className="content-title">购物车</h2>

        <table className="shop-cart">
          <thead>
            <tr>
              <th>
                <Checkbox
                  onChange={this.itemSelectAll}
                  checked={this.allChecked}
                >全选</Checkbox>
              </th>
              <th></th>
              <th>商品信息</th>
              <th width="108">单价</th>
              <th width="108">数量</th>
              <th width="108">金额</th>
              <th width="108">操作</th>
            </tr>
          </thead>
          <tbody>
            {
              this.data.map((group, index)=>{
                return (
                  <Fragment key={index}>
                    <tr>
                      <td colSpan="7" className="shop-name">
                        <Checkbox onChange={this.itemSelectShopAll(group)} checked={group.checked}>店铺: {group.shopName}</Checkbox>
                      </td>
                    </tr>
                    {
                      group.items.map((item, index2)=>{
                        return (
                          <tr className="shop-item" key={`item${index2}`}>
                            <td>
                              <Checkbox onChange={this.itemSelect(group, item)} checked={item.checked}/>
                            </td>
                            <td>
                              <img src={item.img} alt=""/>
                            </td>
                            <td> {item.name} </td>
                            <td> ￥{item.price / 100} </td>
                            <td><InputNumber min={1} defaultValue={item.num} onChange={this.numChange(item)}/></td>
                            <td>￥ {item.price * item.num /100}</td>
                            <td>
                              <a onClick={this.removeItem(group, index, index2)}>删除</a>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </Fragment>
                )
              })
            }

          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">
                <Checkbox
                  onChange={this.itemSelectAll}
                  checked={this.allChecked}
                >全选</Checkbox>
              </td>
              <td>
                已选商品 <span style={{fontSize: 20, color: '#F74316'}}>{this.numTotal}</span> 件
              </td>
              <td colSpan="2">
                合计： <span style={{fontSize: 20, color: '#F74316'}}>￥{this.priceTotal/100} </span>
              </td>
              <td className="js">
                <Link to="/buyer-center/shopping-cart?pay=1">去结算</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </Fragment>
    )
  }

  renderForm = ()=>{

    return (
      <Fragment>
        <h2 className="content-title">订单支付</h2>
        <div className="sec">
          <div className="sec-title">
            选择支付方式
          </div>
          <div className="bank-list">
            <div className={`bank`}>
              招商银行 5548
              <div className={`em`}>储蓄卡</div>
            </div>
            <div className={`bank`}>
              招商银行 5548
              <div className={`em`}>储蓄卡</div>
            </div>
            <div className={`bank`}>
              招商银行 5548
              <div className={`em`}>储蓄卡</div>
            </div>
          </div>
        </div>
        <div className="sec">
          <h3 className="sec-title">
            交易密码：
          </h3>
          <Input type="text" placeholder="请输入" style={{width: 200}}/>
        </div>
        <div className={`sec`}>
          <div className="sec-title">应付金额：￥55.00</div>
        </div>
        <Button type="primary">
          <Link to='/buyer-center/shopping-cart?result=1'>确认付款</Link>
        </Button>
      </Fragment>
    )
  }

  renderInfo = ()=>{
    return (
      <Fragment>
        <h2 className="content-title">订单支付</h2>
        <div style={{width: 250, margin: '0 auto', padding: '60px 0'}}>
          <div style={{textAlign: 'center'}}>
            <img src={__uri('/res/images/smile-g.png')} alt=""/>
            <div style={{margin: '15px 0'}}>
              <b style={{fontSize: 18}}>支付成功</b>
            </div>
          </div>
          <p>
            支付金额：  <b>￥1000.00</b> <br/>
            付款方式：  招商银行储蓄卡 (5548) <br/>
            交易时间：  2018.05.18  12:30:89
          </p>
          <div style={{textAlign: 'center'}}>
            <Button type="primary" htmlType="submit">
              <Link to='/buyer-center/shopping-cart'>返回购物车</Link>
            </Button>
          </div>
        </div>
      </Fragment>
    )
  }

  render(){

    const pageType = this.state.pageType;
    let content = '';
    if(pageType === 'cart'){
      content = this.renderShopCart();
    }
    if(pageType === 'pay'){
      content = this.renderForm();
    }
    if(pageType === 'info'){
      content = this.renderInfo();
    }

    return (
      <AppLayout>
        {content}
      </AppLayout>
    )
  }
}
