import React from 'react';
import './App.css';

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './Components/Header';
import SelectCountries from './Components/SelectCountries';

const App = () => {
  return(
    <div>
        <Header />
        <SelectCountries />
    </div>
  )
};

export default App;