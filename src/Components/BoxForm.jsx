import React, { useState } from 'react'

const BoxForm = props => {
  //setting color as empty
  const [ boxColor, setBoxColor] = useState('')
  const [ boxSize, setBoxSize] = useState(0)

  //method of adding color via submitting form
  const submitBox = e => {
    e.preventDefault();
    // const color = {boxColor}
    props.addBox({boxColor, boxSize})
    
    setBoxColor("")
    setBoxSize(0)
  }
  return(
    <div className="col">
      <div className="card boreder">
        <div className="card-header bg-warning text-dark">
          <h3>Generate your box!</h3>
        </div>
        <div className="card-body">
      <form onSubmit ={submitBox}>
        <div className="form-group">
          <label >Color:</label>
          <input className = "form-control" type="text" onChange={e => setBoxColor(e.target.value)} value ={boxColor} />
        </div>
        <div className="form-group">
          <label >Box Size</label>
          <input type='num' className="form-control" onChange={e => setBoxSize(e.target.value)} value ={boxSize} />
        </div>
        <input type="submit" value="Generate" className="btn btn-outline-dark btn-block"/>
      </form>
        </div>
      </div>
    </div>
  )

}

export default BoxForm