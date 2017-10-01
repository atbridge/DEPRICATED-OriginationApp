//@flow
import type {
    CreditAction,
    IncomeAction
} from '../Types/types'

type Dispatch=(action:CreditAction)=>any

const onlyNumber="Input must be a number!"
export const setIncome:IncomeAction=(dispatch:Dispatch, income:string)=>{
    dispatch({
        type:"SET_INCOME",
        attribute:income,
        errorMsg:/^[0-9]+$/.test(income)?null:onlyNumber
    })
}