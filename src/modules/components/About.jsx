import React from 'react'
import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
import { DatePicker, Button } from 'antd'
import { openModal, shutModal, getList } from '../containers/About/action.jsx'

// @connect(state => {
//   return {
//     list: state.dataList
//   }
// }, {
//   openModal,
//   shutModal,
//   getList
// })

export default class About extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        test: 10
      }
    }

    componentWillMount() {

    }
    
    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    shouldComponentUpdate() {
      debugger
    }
    
    handleTestButton = () => {
      console.log(1)
      debugger
      this.setState({
        test: this.state.test + 1
      }, () => {
        console.log(this.state.test)
      })
    }

    render() {
      console.error(this.props)
      return (
        <div>
          <span>日历：</span>
          <DatePicker />
          <Button onClick={() => this.props.openModal()}>openModal</Button>
          <Button onClick={() => this.props.getList()}>getList</Button>
          <Button onClick={() => this.props.shutModal()}>shutModal</Button>
          <h1>list: {this.props.list.modalStatus + '' }</h1>
          <Button onClick={this.handleTestButton}>test</Button>
          <span>test: {this.props.dataList && this.props.dataList.modalStatus || 1}</span>
        </div>
      )
    }
  }
  
  About.propTypes = {
    list: PropTypes.object,
    openModal: PropTypes.func,
    shutModal: PropTypes.func,
    getList: PropTypes.func
  }
  