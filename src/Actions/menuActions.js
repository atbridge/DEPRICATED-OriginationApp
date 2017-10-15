//@flow
import type {
    ToggleDrawerAction
} from '../Types/types'

export const toggleDrawer:ToggleDrawerAction=(isOpen:boolean)=>({
    isOpen,
    type:"SET_TOGGLE_DRAWER"
})

/*export const dispatchToggleDrawer=(dispatch:Dispatch, isOpen:boolean)=>{
    return dispatch(toggleDrawer(isOpen))
}*/



