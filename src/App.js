import React from 'react';
import './App.css';

// Components
import Header from './Components/Header';
import CasesBox from './Components/CasesBox';
import Charts from './Components/Charts';

const App = () => {
  return(
    <div>
      <Header />
      <CasesBox />
      <Charts />
    </div>
  )
};

export default App;
