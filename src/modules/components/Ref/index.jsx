import React from 'react'
import PropTypes from 'prop-types'
import {Input} from 'antd'
import CustomTextInput from './customComponent'

export default class Index extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();
    }

    componentDidCatch(error) {
        console.error(error)
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
            <h2>父组件调用子组件ref属性</h2>
            <CustomTextInput ref={this.textInput} />
        </div>
      );
    }
  }