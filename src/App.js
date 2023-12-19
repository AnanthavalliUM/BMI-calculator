import "./bmi.css";
import { useState } from "react";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [msg, setmsg] = useState("");

  const calcbmi = (event) => {
    //prevent submitting
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("pls enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) ;
      setbmi(bmi.toFixed(1));
      //msg logic
      if (bmi < 25) {
        setmsg("You are Underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setmsg("You have Normal Weight");
      } else {
        setmsg("You are Overweight");
      }
    }
  };
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h2>BMI Calculator</h2>
          <br />
          <form onSubmit={calcbmi}>
            <div>
              <label htmlFor="weight">Weight(kgs): </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="height">Height(meter): </label>
              <input
                type="number"
                id="height"
                name="height"
                value={height}
                onChange={(e) => setheight(e.target.value)}
                required
              />
            </div>

            <div>
              <button type="submit" className="btn">
                Calculate BMI
              </button>
              <br />
              <button className="btn btn-outline" onClick={reload}>
                Reload
              </button>
              <br />
            </div>
          </form>
          <div className="bmi">
            <h3>Your BMI is :{bmi}</h3>
            <p>{msg}</p>
          </div>
          <div className="img-container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
