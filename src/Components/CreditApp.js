//@flow
import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import type {
    Income,
    User,
    Application,
    Conditions
} from '../Types/types'
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    progress: {
        margin: `0 ${theme.spacing.unit * 2}px`,
    }
})

type SetIncome=(event:any)=>any
type SubmitApp=(user:User, application:Application)=>any
type Classes=Object
type Props={
    setIncome:SetIncome,
    income:Income,
    submitApp:SubmitApp,
    classes:Classes,
    user:User,
    loading:boolean,
    decision:{
        conditions:Conditions,
        isApproved:boolean
    }|null
}
export default withStyles(styles)(({setIncome, submitApp, income, classes, user, loading, decision}:Props)=>(
    loading?<CircularProgress className={classes.progress}/>:
    [
    <TextField 
        key="income"
        id="income" 
        label="Annual Income"
        className={classes.textField}
        margin="normal"
        onChange={setIncome}
        value={income.value}
        helperText={income.errorMsg}
        error={income.errorMsg?true:false}
    />,
    income.errorMsg?null:
    <Button 
        key="submit" 
        className={classes.button}
        onClick={submitApp(user, {
            income:parseFloat(income.value)
        })}
    >
        Submit Application
    </Button>,
    decision&&(decision.isApproved?`Accepted with rate ${decision.conditions.rate} and limit ${decision.conditions.limit}`:"Denied!")
    ]
))