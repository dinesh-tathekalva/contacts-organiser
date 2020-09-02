import React from 'react';
import './App.css';
import ContactsData from './components/contacts/ContactsData'
import Header from './components/layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './context'
import AddContact from './components/contacts/AddContact';
function App() {

  return (
    <Provider >
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />
          <ContactsData />
        </div>
      </div>
    </Provider>
  );

}

export default App;
