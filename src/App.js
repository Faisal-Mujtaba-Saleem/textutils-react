import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    const selectedMode = document.getElementById('mode-selection');
    const buttons = document.getElementsByTagName('button');

    if (Mode === 'light') {
      setMode('dark');
      if (selectedMode.value === 'Enable Night Mode') {
        console.log(selectedMode.value === 'Enable Night Mode');
        document.body.style.backgroundColor = '#002c37';
        document.body.style.color = 'white';

        for (const btn of buttons) {
          btn.style.backgroundColor = '#002c37'
          btn.classList.add('bgBlueOnHover');
        }
        showAlert('Night mode has been enabled successfully!', 'success');
        return '#002c37';
      }
      else if (selectedMode.value === 'Enable Danger-Dark Mode') {
        console.log(selectedMode.value === 'Enable Danger-Dark Mode');
        document.body.style.backgroundColor = '#8b0000';
        document.body.style.color = 'white';

        for (const btn of buttons) {
          btn.style.backgroundColor = '#8b0000'
          btn.classList.add('bgBlueOnHover');
        }
        showAlert('Danger-Dark mode has been enabled successfully!', 'success');
        return '#8b0000';
      }
      else if (selectedMode.value === 'Enable Success-Dark Mode') {
        console.log(selectedMode.value === 'Enable Success-Dark Mode');
        document.body.style.backgroundColor = '#013220';
        document.body.style.color = 'white';

        for (const btn of buttons) {
          btn.style.backgroundColor = '#013220'
          btn.classList.add('bgBlueOnHover');
        }
        showAlert('Success-Dark mode has been enabled successfully!', 'success');
        return '#013220';
      } else {
        document.body.style.backgroundColor = '#212529';
        document.body.style.color = 'white';

        for (const btn of buttons) {
          btn.style.backgroundColor = '#212529';
          btn.classList.add('bgBlueOnHover');
        }
        showAlert('Success-Dark mode has been enabled successfully!', 'success');
        return '#212529';
      }
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

      for (const btn of buttons) {
        btn.style.backgroundColor = '#0d6efd';
      }
      showAlert('Light mode has been enabled successfully!', 'success');
      return 'white';
    }
  }
  const showAlert = (message, type) => {
    setAlert({ msg: message, type })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title={"TextUtils"} aboutText={"About"} mode={Mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About mode={Mode} />} />

            <Route path="/" element={<TextForm heading={'Try TextUtils - Word Counter, Character Counter, Remove extra spaces'} mode={Mode} showAlert={showAlert} />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;