import React from 'react';
import './App.css';
import ContactsData from './components/ContactsData'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <div className="App">
      <Header branding = "Contact Manager"/>
      <div className="container">
        <ContactsData /> 
      </div>
    </div>
  );

}

export default App;
