//@flow
import Menu from './Menu'
import { connect } from 'react-redux'
import {toggleDrawer} from '../Actions/menuActions'
const mapStateToProps=({menu})=>({
    open:menu.isDrawerOpen
})

const mapDispatchToProps=dispatch=>({
    handleDrawerOpen:()=>dispatch(toggleDrawer(true)),
    handleDrawerClose:()=>dispatch(toggleDrawer(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
