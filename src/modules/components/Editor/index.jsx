import React, {Component} from "react";
import CKEditor from './Editor'

export default class Editor extends Component {

  handleChange = (value) => {
    console.error(value)
  }

  render() {
    return (
      <CKEditor id='1' onChange={(value) => this.handleChange(value)} />
    )
  }
}
