//@flow
import type {
    ToggleDrawerAction
} from '../Types/types'

type State={
    isDrawerOpen:boolean
}
const defaultState={
    isDrawerOpen:false
}
export default (state:State=defaultState, action:ToggleDrawerAction)=>{
    switch(action.type){
        case "SET_TOGGLE_DRAWER":
            return {...state, isDrawerOpen:action.isOpen}
        default:
            return state
    }
}