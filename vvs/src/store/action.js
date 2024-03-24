export const addTicket=(value)=>async dispatch=>{
    dispatch({
        type:'ADD',
        payload:value,
    })
}

export const removeTicket=(value)=>async dispatch=>{
    dispatch({
        type:'REMOVE',
        payload:{name:value},
    })
}

export const addDate=(value,key)=>async dispatch=>{
    dispatch({
        type:'ADDDATE',
        payload:{
            day:value,
            date:key

        }
    })
}


