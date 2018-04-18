import React, {Component} from "react";
import CKEditor from './Editor'
import {connect} from 'react-redux'
import {Button} from 'antd'
import { addArticle } from './action.jsx'

@connect(state => {
  return {
    articleEditor: state.articleEditor
  }
}, {
  addArticle
})

export default class Editor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      content: value
    })
  }

  handleConfirm = () => {
    this.props.addArticle({
      "header": "这是一条调试信息",
      "abstract": "我在尝试",
      content: this.state.content
    })
  }

  render() {
    return (
      <div>
        <CKEditor id='1' onChange={(value) => this.handleChange(value)} />
        <Button type='primary' onClick={this.handleConfirm}>提交</Button>
        <Button onClick={this.handleConfirm}>取消</Button>
      </div>
    )
  }
}
