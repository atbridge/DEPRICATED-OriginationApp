//@flow
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import CreditAppContainer from './CreditAppContainer'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import Payment from 'material-ui-icons/Payment'
import AccountBalanceWallet from 'material-ui-icons/AccountBalanceWallet'
import SwapHoriz from 'material-ui-icons/SwapHoriz'
const drawerWidth = 240
const styles = theme => ({
    appFrame: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    appBar: {
      position: 'absolute',
      zIndex: theme.zIndex.navDrawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      height: '100%',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      width: 60,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    drawerInner: {
      // Make the items inside not wrap when transitioning:
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      width: '100%',
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: 24,
      height: 'calc(100% - 56px)',
      marginTop: 56,
      [theme.breakpoints.up('sm')]: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
})

const routes=[
    {
        label:"Apply",
        icon:<SwapHoriz />,
        link:"/apply",
        component:CreditAppContainer
    },{
        label:"Pay",
        icon:<Payment />,
        link:"/pay",
        component:CreditAppContainer
    },{
        label:"Balance",
        icon:<AccountBalanceWallet />,
        link:"/balance",
        component:CreditAppContainer
    }
]
export default withStyles(styles, { withTheme: true })(({classes, open, handleDrawerOpen, handleDrawerClose, theme})=>(
<Router>
<div >
    <div className={classes.appFrame}>
        <AppBar className={classNames(classes.appBar, open && classes.appBarShift)}>
            <Toolbar disableGutters={!open}>
            <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" noWrap>
                Loan Application
            </Typography>
            </Toolbar>
        </AppBar>
    <Drawer
        type="permanent"
        classes={{
        paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
    >
        <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </div>
            <Divider />
            <List className={classes.list}>
                {routes.map(({label, icon, link})=>(
                    <ListItem key={link} button component={Link} to={link}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem> 
                ))}
            </List>
        </div>
    </Drawer>
    <main className={classes.content}>
        {routes.map(({component, link})=>(
            <Route path={link} key={link} component={component}/>
        ))}
        
    </main>
    </div>
    </div>
</Router>
))