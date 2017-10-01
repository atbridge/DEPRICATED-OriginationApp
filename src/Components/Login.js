//@flow
import React from 'react'
import firebase, {provider} from '../utils/firebaseInit'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})
//TODO!  Add array of provideres
const onClick=()=>firebase.auth().signInWithRedirect(provider)

type Classes=Object

export default withStyles(styles)(({classes}:{classes:Classes})=>(
    <Button raised className={classes.button} onClick={onClick}>
        Login with Google
    </Button>
))