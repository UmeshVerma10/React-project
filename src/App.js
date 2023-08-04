
import'./App.css';
import Alert from './components/Alert';

import Nav from './components/Nav';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
//import { BrowserRouter,Routes,Link,Route } from 'react-router-dom';

// import {
  
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
//import {Switch,Route,Link} from 'react-router-dom';
import {
 BrowserRouter as Router,
 Routes, 
 Route,
 
 
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not 
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);

      },1500)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background ='#042743';
      showAlert("Dark mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.background ='white';
      showAlert("Light mode has been Enabled","success");
    }
  }  
  return (
    <>

    {/*<Nav title ="TextUtils" aboutText="About"/>*/}
    {/*<Nav/>*/}
    
    <Router>
    <Nav title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"> 
   
    <Routes>
          <Route path="/about" element={<About/>}>
            
          </Route>
          
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
            
            
          </Route>
    </Routes>
    </div>
    </Router>
     </>



  );
    
}

export default App;
