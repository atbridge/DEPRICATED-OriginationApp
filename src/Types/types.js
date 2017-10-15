export type User={
    displayName:string,
    photoUrl:string,
    email:string,
    uid:string
}

export type IncomeAction={
    type:"SET_INCOME",
    attribute:string,
    errorMsg?:string
} 

export type ToggleDrawerAction={
    type:"SET_TOGGLE_DRAWER",
    isOpen:boolean
}

export type Income={
    value:string,
    errorMsg?:string
}

//if more, do IncomeAction|SomeOtherAction
export type CreditAction=IncomeAction

export type SetUserAction={
    type:"SET_USER",
    user:User
}
export type UnSetUserAction={
    type:"UNSET_USER"
}

export type SetLoadingAction={
    type:"SET_LOADING"
}
export type StopLoadingAction={
    type:"STOP_LOADING"
}
export type LoadingAction=SetLoadingAction|StopLoadingAction


export type=Conditions={
    rate:number,
    limit:number
}
export type DecisionAction={
    type:"DECISION",
    conditions:Conditions|boolean
}


export type Application={
    income:number
}


export type UserAction=SetUserAction|UnSetUser
