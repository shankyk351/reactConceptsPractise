export const incrementCounterAction = (val)=>{
    return {
        type: 'INCREMENT',
        payload: val
    }
}

export const decrementCounterAction = (val)=>{
    return {
        type: 'DECREMENT',
        payload: val
    }
}