//@flow
import type {
    DecisionAction,
    Conditions
} from '../Types/types'

type State={
    conditions:Conditions|null,
    isApproved:boolean
}|null

export default (state:State=null, action:DecisionAction)=>{
    switch(action.type){
        case "DECISION":
            return {
                conditions:action.conditions,
                isApproved:action.isApproved
            }
        default:
            return state
    }
}