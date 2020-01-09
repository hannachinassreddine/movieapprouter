import React from 'react';
import './App.css';
import Movie from './components/movieslist';
import {Route,BrowserRouter} from 'react-router-dom';
import Descec from './components/description'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Route exact path='/' component={Movie}/>
      <Route path='/Desc' component={Descec}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
