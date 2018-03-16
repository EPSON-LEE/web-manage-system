import { connect } from 'react-redux'
import About from '../../components/About.jsx'
import { openModal, shutModal, getList } from './action.jsx'
import store from '../../store.jsx'

// 把状态（state）传到组件中
const mapStateToProps = (state) => {
  return {
    list: state.list,
    async: state.async
  }
}

// 把行为(action)传到组件中
const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch(openModal())
    },
    shutModal: () => {
      dispatch(shutModal())
    },
    getList: () => {
      dispatch(getList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)