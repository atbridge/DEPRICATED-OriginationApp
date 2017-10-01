//@flow
import firebase from '../utils/firebaseInit'
import type {
    SetUserAction,
    UnSetUserAction,
    UserAction,
    User
} from '../Types/types'

export const setUser:SetUserAction=(user:User)=>({
    user,
    type:"SET_USER"
})
export const unSetUser:UnSetUserAction=()=>({
    type:"UNSET_USER"
})

type Dispatch=(action:UserAction)=>any

/**
 * Start listening to changes when the app boots
 */
/*export const listenToPosts=(dispatch:Dispatch)=>{
    firebase.database().ref('posts').limitToLast(100).on('child_added', snapshot =>{
        console.log(snapshot.val())
        dispatch(setPosts(snapshot.val(), snapshot.key))
    })
}*/

export const listenToAuth=(dispatch:Dispatch)=>{
    firebase.auth().onAuthStateChanged(user=>{
        console.log(user)
        if(user){
            dispatch(setUser(user))
        }
        else{
            dispatch(unSetUser())
        }
    })
        
}



