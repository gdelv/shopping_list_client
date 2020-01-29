import React from 'react';
import { Routes } from "./routes";
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <>
      <header>
        <Nav/>
      </header>
      <main>
        <Routes/>
      </main>
    </>
  );
}

export default App;
