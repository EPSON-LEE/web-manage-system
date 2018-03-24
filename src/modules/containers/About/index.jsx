import { connect } from 'react-redux'
import About from '../../components/About.jsx'
import { openModal, shutModal, getList } from './action.jsx'
import store from '../../store.jsx'

// 把状态（state）传到组件中
const mapStateToProps = (state) => {
  return {
    list: state.dataList
  }
}

// 把行为(action)传到组件中
const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      store.dispatch(openModal())
    },
    shutModal: () => {
      store.dispatch(shutModal())
    },
    getList: () => {
      store.dispatch(getList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)