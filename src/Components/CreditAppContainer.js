//@flow
import CreditApp from './CreditApp'
import { connect } from 'react-redux'
import {setIncome} from '../Actions/creditActions'
import {apply} from '../Actions/applicationActions'
const mapStateToProps=({user, creditAttributes, loading, decision})=>({
     user,
     ...creditAttributes,
     loading,
     decision
})

const mapDispatchToProps=dispatch=>({
    setIncome:event=>setIncome(dispatch, event.target.value),
    submitApp:(user, application)=>()=>apply(dispatch, user, application)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreditApp)
