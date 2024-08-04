import React from 'react'
import { useState } from 'react'


const Textform = (props) => {

const[ text, setText]=useState('');

const handleClear=() => {
 let newText='';
  setText(newText);
  props.showAlert("Text Cleared!", "success");

}
const handleUpCase=() => {
  let up= (document.getElementById('mybox').value).toUpperCase();
  setText(up);
  props.showAlert("Converted to uppercase!", "success");
}
const handleLwCase=() => {
 let lw= (document.getElementById('mybox').value).toLowerCase();
 setText(lw);
 props.showAlert("Converted to lowercase!", "success");
}

const handleSpace=() => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");

}
const handleChange= (e) => {
   setText(e.target.value);
}

  return (
    <>
    <div className='container my-4' style={{color: props.mode==='dark'?'white':'#042743'}}>
  
      <div className="mb-3">
        <h1 className='mb-4'> Text Box{props.heading}</h1>
        <textarea className="form-control" id="mybox" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} rows={8} defaultValue={""} value={text} onChange={handleChange}/>
      </div>
    
      <button type="button" disabled={text.length===0} class="btn btn-primary mx-2 my-2" onClick={handleUpCase} >Convert to UpperCase</button>
      <button type="button" disabled={text.length===0} class="btn btn-primary mx-2 my-2" onClick={handleLwCase}>Convert to LowerCase</button>
      <button type="button" disabled={text.length===0} class="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
      <button type="button" disabled={text.length===0}  class="btn btn-primary mx-2 my-2" onClick={handleSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
  </>

  )
}

export default Textform