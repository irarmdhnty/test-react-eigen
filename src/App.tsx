import React from 'react';
import 'antd/dist/reset.css'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Article from './components/Article';
import Detail from './components/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
