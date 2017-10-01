//@flow
import type {
    LoadingAction
} from '../Types/types'

export default (state:boolean=false, action:LoadingAction)=>{
    switch(action.type){
        case "SET_LOADING":
            return true
        case "STOP_LOADING":
            return false
        default:
            return state
    }
}