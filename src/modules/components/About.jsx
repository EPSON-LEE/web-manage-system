import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { DatePicker, Button } from 'antd'
import { openModal, shutModal, getList } from '../containers/About/action.jsx'

@connect(state => {
  return {
    list: state.dataList
  }
}, {
  openModal,
  shutModal,
  getList
})

export default class About extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }
    
    render() {
      console.log(this.props)
      return (
        <div>
          <span>日历：</span>
          <DatePicker />
          <Button onClick={() => this.props.openModal()}>openModal</Button>
          <Button onClick={() => this.props.getList()}>getList</Button>
          <Button onClick={() => this.props.shutModal()}>shutModal</Button>
          <h1>list: {this.props.list.modalStatus + '' }</h1>
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
  