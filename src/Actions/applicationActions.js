import firebase from '../utils/firebaseInit'
import type {
    LoadingAction,
    User,
    Application,
    DecisionAction
} from '../Types/types'

type Dispatch=(action:LoadingAction|DecisionAction)=>any

export const setUser:SetUserAction=(user:User)=>({
    user,
    type:"SET_USER"
})

export const apply=(dispatch:Dispatch, user:User, application:Application) => {
    dispatch({type:"SET_LOADING"})
    let appRef=firebase.database().ref('apps')
    const postRef=appRef.push()
    const {displayName, uid, email}=user
    postRef.set({displayName, uid, email, timestamp:firebase.database.ServerValue.TIMESTAMP, ...application})
    let decisionRef=appRef.child(postRef.key).child('decision')
    decisionRef.on('value', snapshot=>{
        const decision=snapshot.val()
        console.log(decision)
        if(decision!==null){
            decisionRef.off('value')
            dispatch({type:"STOP_LOADING"})
            dispatch({...decision, type:"DECISION"})
        }
    })
}

