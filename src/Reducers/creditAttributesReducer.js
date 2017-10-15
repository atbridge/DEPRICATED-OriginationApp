//@flow
import type {
    CreditAction,
    Income
} from '../Types/types'


type State={
    income:Income
}
const defaultState={
    income:{
        value:"0"
    }
}
export default (state:State=defaultState, action:CreditAction)=>{
    switch(action.type){
        case "SET_INCOME":
            return {
                ...state, 
                income:{
                    value:action.attribute,
                    errorMsg:action.errorMsg
                }
            }
        default:
            return state
    }
}