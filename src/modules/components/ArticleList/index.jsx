import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getList } from './action.jsx'

@connect(state => {
  return {
    list: state.articleList.article
  }
}, {
  getList
})

export default class Article extends React.Component{
  componentDidMount() {
    this.props.getList()
  }
  render() {
    const {
      list
    } = this.props
    return (
      <div>
        <div className="index">
          <ul>
          {
            list.map(item => {
              return (
                <li key={item.id}>{item.header}:   
                  <div dangerouslySetInnerHTML={{
                    __html: item.content
                  }}/>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}
Article.propTypes = {
  list: PropTypes.array,
  getList: PropTypes.func
}