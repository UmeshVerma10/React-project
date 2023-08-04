import React,{useState} from "react";

export default function TextForm(props) {
   
    
  const handleUpClick=()=>{
     //console.log(" Uppercase was clicked" + text);
     let newText= text.toUpperCase();
     setText(newText);
      
     
  }
  const handleLoClick=()=>{
      //console.log(" Lowercase was clicked" + text);
      let newText= text.toLowerCase();
      setText(newText);
     
  }
  const handleClearClick=()=>{
      
      let newText= "" 
      setText(newText)
      
  }
  const handleOnChange=(event)=>{
      //console.log("on change");
      setText(event.target.value)
  }
  const handleCopy =()=>{
      var text =document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,999);
      navigator.clipboard.writeText(text.value);
      
  }
  const handleExtraSpaces=() => {
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "));
      
  }
  const [text,setText] =useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
      <div className="mb-3">
       
        
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}
          
          id="myBox"
          rows="8"
        ></textarea>
    </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowerercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
      
    </div>
    <div className="container my-2 " style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h2>Your Text</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>Preview</p>
        <p>{text.length>0?text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
