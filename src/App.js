// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Graphics from './components/Graphics';
import './components/styles.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/graphics" element={<Graphics />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
