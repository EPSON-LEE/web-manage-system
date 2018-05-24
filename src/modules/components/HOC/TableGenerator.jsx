import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Pagination, Table } from 'antd'

// decorator
// @connect(state => {
//   return {
//   }
// }, {
// })

// Proxy Proxy 
export let TableGenerator = (WrapperComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        current: 1,
        pageSize: 10,
        total: 102
      }
    }

    componentDidMount() {
      // getData
    }

    handlePaginationChange = (page, pageSize) => {
      console.error(page, pageSize)
      this.setState({
        current: page,
        pageSize: pageSize
      })
    }

    storeRef = (ref) => {
      this.ref = ref
      console.error('ref:', ref)
    }

    render() {
      const newProps = {
        paginationParams: this.state
      }
      return (
        <div>
          <WrapperComponent {...newProps} ref={this.storeRef} />
          <Pagination
            hideOnSinglePage
            current={this.state.current || 1}
            pageSize={this.state.pageSize}
            onChange={this.handlePaginationChange}
            total={this.state.total}
           />
        </div>
      )
    }
  }
}