import React from 'react'

const EvenOdd = (props) => {
  let num = props.year;
  let age = props.age;
    const OddEven = ()=>{
        console.log(props.year);
        console.log(props.age)
        
        if(num%2===0){
            return (`you were born in the Even year ${num} and your correct age is : ${age}`)
        }else 
            return (`you were born in the odd year ${num} and your current age is : ${age}`)
    }
  return (
    <div>
        
    </div>
  )
}

export default EvenOdd;