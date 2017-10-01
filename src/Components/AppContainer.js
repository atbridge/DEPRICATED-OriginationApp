//@flow
import App from './App'
import { connect } from 'react-redux'
import {listenToAuth} from '../Actions/userActions'
const mapStateToProps=({user})=>({
     user
})
const mapDispatchToProps=dispatch=>{
    listenToAuth(dispatch)
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
