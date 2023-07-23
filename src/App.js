// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/Todo';
import ShoppingCart from './components/ShoppingCart';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/todo" className="nav-link">To-Do List</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">Shopping Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <style>
        {`
        /* Add your CSS styles here */

        .navbar {
          background-color: #333;
          padding: 10px;
        }

        .nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        .nav-item {
          margin-right: 15px;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
        }

        .nav-link:hover {
          color: #ddd;
        }
        `}
      </style>
    </Router>
  );
};

export default App;
