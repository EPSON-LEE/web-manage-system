import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, Table, Button } from 'antd'
import { TableGenerator } from './TableGenerator'

@TableGenerator
export default class HOCGeneratorTable extends React.Component {
  constructor(props) {
    super(props)
    // this.instanceName = 'han solo'
  }

  render() {
    console.error(this.props)
    return (
      <div>
        <h1>HOC basic</h1>
        <pre>假装我是一个表格吧</pre>
        <div>total: {this.props.paginationParams.total}</div>
        <div>pageSize: {this.props.paginationParams.pageSize}</div>
        <div>current: {this.props.paginationParams.current}</div>
        <Button onClick={this.props.ref}>点我</Button>
      </div>
    )
  }
}