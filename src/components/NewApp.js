import React, { useState } from "react";


const NameList = ()=>{
    const[list, setList] = useState(["Satish", "Dev", "Gauresh"])
    const[name, setName] = useState('');

    const addHandler =()=>{
        setList([...list, name]);
        setName("");
    }
    return(
        <div>
            <ul>
                {list.map((name)=>(
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <input
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)} 
            />
            <button onClick={addHandler}>
                Add Name
            </button>
        </div>
    )
}



const Counter = () => {
  const [count, setCount] = useState(10);

  const onClickHandler =()=>{
    setCount(count+1)
  }

  return (
    <div>
      <div className="counter">
        <button onClick={onClickHandler}>Counter:{count}</button>
      </div>
    </div>
  );
};


const NewApp = () => {
  return (
    <div>
        <Counter />
        <NameList />
    </div>
  )
}


export default NewApp;
