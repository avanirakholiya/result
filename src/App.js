import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"

function App() {

  const [m1, setMarks1] = useState('');
  const [m2, setMarks2] = useState('');
  const [m3, setMarks3] = useState('');
  const [tot, setTot] = useState('');
  const [average, setAvg] = useState('');
  const [gradee, setGrade] = useState('');
  const [result, setResult] = useState('');

  function handleClick() {
    const total = Number(m1) + Number(m2) + Number(m3);
    setTot(total);

    const avg = total / 3;
    setAvg(avg);

    let grade;
    if (avg > 70) {
      grade = "A";
    } else if (avg > 50) {
      grade = "B";
    } else if (avg > 35) {
      grade = "C";
    } else {
      grade = "F";
    }
    setGrade(grade);

    if (m1 >= 40 && m2 >= 40 && m3 >= 40) {
      setResult("Pass");
    } else {
      setResult("Fail");
    }
  }

  return (
    <div className="container" style={{ paddingLeft: "200px" }}>
      <h1>Student Marks Calculation</h1>
      <div className="form-group">
        <label>English</label><br />
        <input type="text" name="m1" className="form-control" value={m1} onChange={(event) => {
          setMarks1(event.target.value);
        }} />
      </div>

      <div className="form-group">
        <label>Gujarati</label><br />
        <input type="text" name="m2" className="form-control" value={m2} onChange={(event) => {
          setMarks2(event.target.value);
        }} />
      </div>

      <div className="form-group">
        <label>Hindi</label><br />
        <input type="text" name="m3" className="form-control" value={m3} onChange={(event) => {
          setMarks3(event.target.value);
        }} />
      </div>

      <button type="button" onClick={handleClick} className="btn btn-success">Click Me</button>

      <div className="form-group">
        <label>Total</label>
        <input type="text" className="form-control" value={tot} readOnly />
      </div>

      <div className="form-group">
        <label>Average</label>
        <input type="text" className="form-control" value={average} readOnly />
      </div>

      <div className="form-group">
        <label>Grade</label>
        <input type="text" className="form-control" value={gradee} readOnly />
      </div>

      <div className="form-group">
        <label>Result</label>
        <input type="text" className="form-control" value={result} readOnly />
      </div>
    </div>
  );
}

export default App;
