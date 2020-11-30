import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react'
import Box from './Components/Box'
import BoxForm from './Components/BoxForm'

function App() {
  const [color, setColor] = useState([])
  return (
    <>
    <div className="container mt-5">
      <div className="row bg-dark text-light jumbotron">

        <h3 >Welcome to Box Generator!</h3>
      </div>
      <div className="row mt-4 border border-dark p-5">
<div className="col-sm-4">
  
        <BoxForm addBox = {c => 
        setColor([...color, c],
          console.log(c)
          )
      }
        />
</div>
<div className="col-sm-1"></div>
      <div className="col-sm-7">
        {color.map((color,i) => <Box key = {i} color = {color}  /> )}
        
      </div>
    </div>
    </div>
    
    </>
  );
}

export default App;
