// App.js
import React from 'react';

import HomePage from './HomePage';
import NextPage from './NextPage';

import {BrowserRouter,Route,Routes} from 'react-router-dom';

 
function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route exact path="/" Component={HomePage} />
        <Route path="/next" Component={NextPage} />
       
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
