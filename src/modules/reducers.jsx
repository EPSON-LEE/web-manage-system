import {combineReducers} from 'redux'
import {dataList} from './components/Index/reducers.jsx'
import {articleList} from './components/ArticleList/reducers'
let root = combineReducers({
  articleList,
  dataList
})
export default root

