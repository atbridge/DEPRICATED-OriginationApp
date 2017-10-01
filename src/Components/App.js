//@flow
import React from 'react'
import Login from './Login'
import type {User} from '../Types/types'
import CreditAppContainer from './CreditAppContainer'
export default ({user}:{user:User})=>(
    user?<CreditAppContainer/>:<Login/>
)