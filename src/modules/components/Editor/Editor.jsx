import React, {Component} from "react";

export default class CKEditor extends Component {
  constructor(props) {
    super(props);
    this.elementName = "editor";
  }

  render() {
    return (
      <textarea name={this.elementName} defaultValue={this.props.value}></textarea>
    )
  }

  componentDidMount() {
    let configuration = {
      toolbar :  [
        { name: 'source', items: ['Source'] },
        { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'] },
        { name: 'styles', items: ['Format'] },
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
        { name: 'links', items: ['Link', 'Unlink'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
        { name: 'insert', items: ['Image'] },
        { name: 'tools', items: ['Maximize'] }
      ],
      language: 'zh-CN'
    }
    CKEDITOR.replace(this.elementName, configuration);
    CKEDITOR.instances[this.elementName].on("change", function () {
      let data = CKEDITOR.instances[this.elementName].getData();
      this.props.onChange(data);
    }.bind(this));
  }

  componentWillUnmount() {
    CKEDITOR.instances[this.elementName].destroy();
  }
}