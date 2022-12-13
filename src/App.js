import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption === "Fibonacci") {
      navigate('/fibonacci')
      
    } else if (selectedOption === "OddEvenNumber") {
      navigate('/evenodd')
      
    }
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeDob = (event) => {
    setDob(event.target.value);
    const year = event.target.value.split("-")[0];
    console.log(year);
  };
  return (
    <div className="app">
      <form className="myForm" onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" name="username" />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            onChange={handleChangeAge}
            value={age}
          />
        </label>
        <label>
          Enter your DOB:
          <input
            type="date"
            name="dob"
            id="dobid"
            onChange={handleChangeDob}
            value={dob}
          />
        </label>
        <h2> What game you want to play?</h2>
        <label>
          <input
            type="radio"
            value="Fibonacci"
            name="game"
            checked={selectedOption === "Fibonacci"}
            onChange={() => setSelectedOption("Fibonacci")}
          />
          Fibonacci
        </label>
        <label>
          <input
            type="radio"
            value="OddEvenNumber"
            name="game"
            checked={selectedOption === "OddEvenNumber"}
            onChange={() => setSelectedOption("OddEvenNumber")}
          />
          OddEvenNumber
        </label>
        { <input
          type="submit"
          style={{
            width: "100px",
            marginLeft: "600px",
            marginTop: "20px",
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer",
          }} />}
                
      </form>
      
    </div>
  );
}

export default App;
