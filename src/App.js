import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

import './App.css';

function App() {
  
  return (
    
    <Router>

      <Navigation />
      
      <div className="container p-4">
        <Route path="/mernstack" exact component={NotesList} />
        <Route path="/mernstack/edit/:id" component={CreateNote} />
        <Route path="/mernstack/create" component={CreateNote} />
        <Route path="/mernstack/user" component={CreateUser} />
      </div>
    
    </Router>
    
  );

}

export default App;
