import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AddEntry from './Pages/AddEntry';
import EditEntry from './Pages/EditEntry';
import ViewEntries from './Pages/ViewEntry';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [entries, setEntries] = useState([]); // Ensure entries is initialized as an empty array

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-entry" element={<AddEntry entries={entries} setEntries={setEntries} />} />
        <Route path="/edit/:id" element={<EditEntry entries={entries} setEntries={setEntries} />} />
        <Route path="/view-entries" element={<ViewEntries entries={entries} setEntries={setEntries}/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
