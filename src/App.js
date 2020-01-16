import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [values, setValues] = useState({
    nilai1: "", 
    nilai2: "", 
    nilai3: ""
  });

  const [check, setCheck] = useState({
    check1: false,
    check2: false,
    check3: false,
  })

  const [hasil, setHasil] = useState(0);
  const [message, setMessage] = useState('');

  var operations = {
      "+" : function (operand1, operand2) {
          return operand1 + operand2;
      },
      "-" : function (operand1, operand2) {
          return operand1 - operand2;
      },
      "*" : function (operand1, operand2) {
          return operand1 * operand2;
      },
      "/" : function (operand1, operand2) {
          return operand1 / operand2;
      }
  };

  const accumulate = (list, operator) => {
      return list.reduce(operations[operator]);
  }  

  const onCalculate = (operator) => (e) => {
    e.preventDefault();

    if (check.check1 === true && check.check2 === true && check.check3 === true) {
      
      setHasil(accumulate([
        parseInt(values.nilai1), parseInt(values.nilai2), parseInt(values.nilai3)
      ], operator)); 
      setMessage('');

    } else if (check.check1 === true && check.check2 === true) {

      setHasil(accumulate([
        parseInt(values.nilai1), parseInt(values.nilai2)
      ], operator)); 
      setMessage('');

    } else if (check.check1 === true && check.check3 === true) {

      setHasil(accumulate([
        parseInt(values.nilai1), parseInt(values.nilai3)
      ], operator)); 
      setMessage('');

    } else if (check.check2 === true && check.check3 === true) {

      setHasil(accumulate([
        parseInt(values.nilai2), parseInt(values.nilai3)
      ], operator)); 
      setMessage('');

    } else {

      setHasil(0);
      setMessage('harus di checklis 2 checkbox');

    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  }

  const handleClick = (e) => {
    const { name, checked } = e.target;
    setCheck({...check, [name]: checked });
  }

  return (
    <div className="container mt-4">
      <div className="col-md-6 mx-auto">
        <h1>Calculator</h1>

        <form>
          <div className="form-group row">
            <div className="col-sm-10">
              <input type="number" 
                     className="form-control" 
                     name="nilai1" 
                     onChange={handleChange}
                />
            </div>
            <div className="col-sm-2">
              <input type="checkbox" 
                    name="check1" 
                    onClick={handleClick}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <input type="number" 
                     className="form-control" 
                     name="nilai2" 
                     onChange={handleChange}
                />
            </div>
            <div className="col-sm-2">
              <input type="checkbox" 
                    name="check2" 
                    onClick={handleClick}
              />
            </div>
          </div>
          
          <div className="form-group row">
            <div className="col-sm-10">
              <input type="number" 
                     className="form-control" 
                     name="nilai3" 
                     onChange={handleChange}
                />
            </div>
            <div className="col-sm-2">
              <input type="checkbox" 
                    name="check3" 
                    onClick={handleClick}
              />
            </div>
          </div>

          <button
            onClick={onCalculate('+')}
            className="btn btn-primary"
          >
            +
          </button>{' '}
          <button
            onClick={onCalculate('-')}
            className="btn btn-primary"
          >
            -
          </button>{' '}
          <button
            onClick={onCalculate('*')}
            className="btn btn-primary"
          >
            *
          </button>{' '}
          <button
            onClick={onCalculate('/')}
            className="btn btn-primary"
          >
            /
          </button>

        </form>

        <hr/>

        <p>Hasil : {hasil}</p>
        <p>{message}</p>

      </div>
    </div>
  );
}

export default App;
