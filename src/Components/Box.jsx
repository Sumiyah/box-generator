import React from 'react';

const Box = props => {
  return (
    <div className="row">
<div className="col-sm-2">

      <div style ={{backgroundColor:`${props.color.boxColor}` , width: `${props.color.boxSize}px` ,height: `${props.color.boxSize}px`, margin:'10px'}}></div>
  
</div>
    </div>
    
    )
  }
  // style={{ backgroundColor: `${props.color.boxColor}`, width: `${props.box.mysize}px`, height: `${props.box.mysize}px` }}
//{height:props.boxSize}
export default Box;