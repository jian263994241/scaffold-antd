import {observable} from 'mobx';
import {request} from '../common/service';

// request({
//   url: '/account/withdraw'
// })
//
//


export default class MockDate {

  FZdata = [
    {no: '110006490721', name: '个人商户-马**', name2: '住宿', price: '300', total: '300', f2: '200333|15 , 000001|5' },
    {no: '110006490711', name: '天津市恒瑞嘉科技发展有限公司', name2: '酒店', price: '20', total: '20', f2: '200333|15 , 000001|5' },
    {no: '240006490691', name: '上海胡瑾金融贸易有限公司', name2: '机票', price: '450', total: '450', f2: '200321|445 , 000001|5' },
    {no: '110006340606', name: '天津市恒瑞嘉科技发展有限公司', name2: '宾馆', price: '50', total: '50', f2: '200333|45 , 000001|5' },
    {no: '110052340670', name: '天津市恒瑞嘉科技发展有限公司', name2: '酒店', price: '300', total: '300', f2: '200333|295 , 000001|5' },
    {no: '110052340654', name: '上海胡瑾金融贸易有限公司', name2: '手机', price: '45', total: '45', f2: '200321|40 , 000001|5' },
    {no: '110052670631', name: '南京赵健儿童服饰公司', name2: '旅行', price: '300', total: '300', f2: '200345|295 , 000001|5' },
    {no: '110058920606', name: '快餐餐饮公司', name2: '住宿', price: '300', total: '300', f2: '200374|295 , 000001|5' },
    {no: '270058920623', name: '快餐餐饮公司', name2: '酒店', price: '56', total: '56', f2: '200374|51 , 000001|5' },
    {no: '880058920656', name: '南京赵健儿童服饰公司', name2: '火车票', price: '77', total: '77', f2: '200345|72 , 000001|5' },
 ];

 @observable mjPrice = '55.00';

}
