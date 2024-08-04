import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import Alert from './Component/Alert';
import { useState } from 'react';




function App() {

  const[ mode, setMode] = useState('light');
  const[ alert, setAlert ] = useState(null);

  const showAlert=(message, type)=> {
    setAlert( {  
      msg: message,
      type: type }
     )

     setTimeout(()=>{
        setAlert(null)
     },1500)
  }

  const toggleMode=()=>{
    if(mode=='light'){

      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");

    }else{

      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");

    }

  }

  return (
    <div>
      <Navbar mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Textform mode={mode} showAlert={showAlert}/>
    </div>
  );
}

export default App;
