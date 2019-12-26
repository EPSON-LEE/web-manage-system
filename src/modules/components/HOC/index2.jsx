import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, Table, Button } from 'antd'
import { refsHOC } from './refsHOC'

class HOCGeneratorTable extends React.Component {
  constructor(props) {
    super(props)
    this.instanceName = 'han solo'
    this.method = this.method.bind(this)
  }

  method() {
    console.error(1)
  }

  render() {
    console.error(this.props)
    return (
      <div>
        <h1>HOC basic</h1>
      </div>
    )
  }
}

export default refsHOC(HOCGeneratorTable)