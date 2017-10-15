//@flow
import React from 'react'
import Login from './Login'
import type {User} from '../Types/types'
import MenuContainer from './MenuContainer'
export default ({user}:{user:User})=>(
    user?<MenuContainer/>:<Login/>
)