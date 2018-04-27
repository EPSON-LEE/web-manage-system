import React, {Component} from 'react'
import {Table, message, Pagination} from 'antd'

export default class GeneralTable extends Component {

  transColumnsToColumns = (columns) => {
    if (columns.length > 0) {
      return columns.map(element => {
        switch (element.type) {
          case 'EditableInput':
            return {
              ...element,
              render: (text) => (
                <span key={element.dataSource}>
                  {'P' + text}
                </span>
              ),
              sorter: (typeof element.sorter === 'function' || element.sorter === false)
              ? element.sorter
              : (a, b) => (a[element.dataIndex] - b[element.dataIndex])
            }
          case 'EditableSelect':
            return {
              ...element,
              render: (text) => (
                <span key={element.dataSource}>{text}</span>
              ),
              sorter: (typeof element.sorter === 'function' || element.sorter === false)
              ? element.sorter
              : (a, b) => (a[element.dataIndex] - b[element.dataIndex])
            }
          case 'Button':
            return {
              ...element,
              render: () => (
                element.buttonDes.map(
                  (item, index) =>
                    <a key={index} href='javascript:;' onClick={item.action}>
                      {item.name}
                    </a>
                  )
              )
            }
          default:
            return element
        }
      })
    } else {
      message.error('表头传递错误')
    }
  }

  render() {
    return (
      <div>
        <Table
          bordered={!this.props.bordered}
          loading={false}
          pagination={false}
          title={() => this.props.title}
          dataSource={this.props.dataSource || []}
          columns={this.transColumnsToColumns(this.props.columns || [])}
         />
        {
          this.props.pagination && <Pagination showQuickJumper defaultCurrent={1} total={50} />
        }
      </div>
    )
  }
}
