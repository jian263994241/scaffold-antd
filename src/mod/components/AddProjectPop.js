import React, {Component, PureComponent} from 'react';
import Modal from 'antd/lib/modal';
import Form from 'antd/lib/form';
import Radio from 'antd/lib/radio';
import Checkbox from 'antd/lib/checkbox';
import Input from 'antd/lib/input';
import DatePicker from 'antd/lib/date-picker';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const TextArea = Input.TextArea;

export default class AddProjectPop extends Component {

  // static getDerivedStateFromProps(props, state){
  //   const {visible} = props;
  //   return {
  //     visible
  //   };
  // }

  close = ()=>{

    this.setState({
      visible: false
    })
  }

  render(){

    const {onCancel, visible} = this.props;

    const formItemLayout = {
      labelCol: {span: 3 },
       wrapperCol: {span: 21},
    };

    return (
      <Modal
        visible={visible}
        width={750}
        title="创建项目"
        okText="确定"
        cancelText="取消"
        onCancel={onCancel}
        destroyOnClose
      >
        <Form>
          <FormItem label="业务线" {...formItemLayout}>
            <RadioGroup>
              <Radio value={1}>账户产品中心</Radio>
              <Radio value={2}>企业金融</Radio>
              <Radio value={3}>IPO</Radio>
              <Radio value={4}>其他</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="项目类型" {...formItemLayout}>
            <RadioGroup>
              <Radio value={1}>项目工作</Radio>
              <Radio value={2}>固定工作</Radio>
              <Radio value={3}>突发工作</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="项目阶段" {...formItemLayout}>
            <CheckboxGroup>
              <Checkbox value={1}>交互</Checkbox>
              <Checkbox value={2}>设计</Checkbox>
              <Checkbox value={3}>前端</Checkbox>
              <Checkbox value={4}>联调</Checkbox>
              <Checkbox value={5}>测试</Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem label="项目名称" {...formItemLayout}>
            <Input type="text" placeholder="请填写"/>
          </FormItem>
          <FormItem label="项目负责人" {...formItemLayout}>
            <Input type="text" placeholder="请填写"/>
          </FormItem>
          <FormItem label="上线日期" {...formItemLayout}>
            <DatePicker/>
          </FormItem>
          <FormItem label="项目目标" {...formItemLayout}>
            <TextArea placeholder="请填写" autosize={{ minRows: 1, maxRows: 6 }} />
          </FormItem>
          <FormItem label="项目描述" {...formItemLayout}>
            <TextArea placeholder="请填写(选填)" autosize={{ minRows: 2, maxRows: 6 }} />
          </FormItem>
        </Form>
      </Modal>
    )
  }
}
