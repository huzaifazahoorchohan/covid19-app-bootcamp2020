import React from 'react';
import './App.css';

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './Components/Header';
import CountryPicker from './Components/CountryPicker';


const App = () => {
  return(
    <div>
        <Header />
        <CountryPicker/>
    </div>
  )
};

export default App;