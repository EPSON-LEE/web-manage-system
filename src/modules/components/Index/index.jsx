import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { DatePicker, Button, Modal } from 'antd'
import { openModal, shutModal, getList } from './action.jsx'

@connect(state => {
  return {
    list: state.dataList
  }
}, {
  openModal,
  shutModal,
  getList
})
export default class Index extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        test: 1,
        modalStatus: false
      }
      this.test2 = 1
      console.log('constructor1')
    }

    componentWillMount() {
      console.log('componentWillMount')
    }
    
    componentDidMount() {
      console.log('componentDidMount')
    }

    componentWillReceiveProps(props, newProps) {
      console.log(props, newProps)
      console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate() {
      console.log('shouldComponentUpdate')
      return true
    }

    componentWillUpdate() {
      console.log('componentWillUpdate')
    }

    componentDidUpdate() {
      console.log('componentDidUpdate')
    }

    componentWillUnmount() {
      console.log('componentWillUnmount')
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //   debugger
    //   console.log('nextProps:',nextProps, 'nextState:', nextState)
    //   if (nextState.test === 10) {
    //     return true
    //   }
    //   // return false
    // }

    handleTest = () => {
      this.setState({
        test: this.state.test + 1
      })
      this.setState({
        test: this.state.test + 1
      })
      this.setState({
        test: this.state.test + 1
      })
    }

    handleTest2 = () => {
      this.setState({
        test: this.state.test
      })
      console.log(1111111)
      this.test2 = this.test2 + 1
    }

    handleModal = () => {
      this.setState({
        modalStatus: false
      })
    }

    openModal = () => {
      this.props.openModal()
      this.setState({
        modalStatus: true
      })
    }

    render() {
      return (
        <div>
          <span>日历：</span>
          <DatePicker />
          <Button onClick={() => this.openModal()}>openModal</Button>
          <Button onClick={() => this.props.getList()}>getList</Button>
          <Button onClick={() => this.props.shutModal()}>shutModal</Button>
          <h1>list: {this.props.list.modalStatus + '' }</h1>
          <Button onClick={this.handleTest}>test</Button>
          <h2>{this.state.test}</h2>
          <Button onClick={this.handleTest2}>test2ßß</Button>
          <h2>{this.test2}dscsdsssdcfdsfsds</h2>
          <Modal
            title='我是一个弹窗'
            visible={this.state.modalStatus}
            onCancel={this.handleModal}
          >
            <Button>美化过的按钮</Button>
          </Modal>
        </div>
      )
    }
  }
  
  Index.propTypes = {
    list: PropTypes.object,
    openModal: PropTypes.func,
    shutModal: PropTypes.func,
    getList: PropTypes.func
  }
  