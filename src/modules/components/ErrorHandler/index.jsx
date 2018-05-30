import React from 'react'
import PropTypes from 'prop-types'
import {Input, Button} from 'antd'

class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          count: 0
      }
    }

    addCountState = () => {
        console.error(1)
        this.setState({
            count: this.state.count + 1
        })
    }
  
    render() {
        if(this.state.count === 5) {
            throw new Error('try componentDidCatch')
        }
        return (
            <div>
                {this.state.count}
                <Button onClick={this.addCountState}>点我加一</Button>
            </div>
        )
    }
  }

  class ErrorDealer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }
          
      componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
      }
      render() {
          <span>当数字加到5， componentDidCatch捕捉错误</span>
          if (this.state.errorInfo) {
              return (
                <div>
                    <h2>Something went wrong.</h2>
                    { this.state.error && this.state.error.toString() }
                    <p>errorInfo.componentStack</p>
                    {this.state.errorInfo.componentStack}
                </div>
              )
          }
              // Normally, just render children
            return this.props.children;
      }
  }

  export default function App() {
      return(
        <ErrorDealer>
            <Counter />
        </ErrorDealer>
      )
  }