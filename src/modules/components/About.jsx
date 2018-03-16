import React from 'react'
import PropTypes from 'prop-types'

export default class About extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      // this.props.saveReducer()
    }
    
    render() {
      console.log(this.props)
      return (
        <div>
          <button onClick={() => this.props.openModal()}>sdsada</button>
          <button onClick={() => this.props.getList()}>sdsada</button>
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
  