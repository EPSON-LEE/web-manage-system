import {combineReducers} from 'redux'
import {dataList} from './components/Index/reducers.jsx'
import {articleList} from './components/ArticleList/reducers'
import {articleEditor} from './components/Editor/reducers'
let root = combineReducers({
  articleEditor,
  articleList,
  dataList
})
export default root

