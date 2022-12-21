/*const num = [20, 30, 40];
let total = 0;
for(const n of num){
    total += n;
}
//by useing Reduce function
num.reduce((cv,n)=>cv+n,0) */

import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {
    const [state] = useReducer( (state, action)=>{}, {
        names:[],
        name:""
    });

  return (
    <div>Reducer</div>
  )
}

export default Reducer
