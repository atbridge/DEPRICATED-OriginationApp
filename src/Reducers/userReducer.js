//@flow
import type {
    UserAction,
    User
} from '../Types/types'

export default (state:User|null=null, action:UserAction)=>{
    switch(action.type){
        case "SET_USER":
            return action.user
        case "UNSET_USER":
            return null
        default:
            return state
    }
}