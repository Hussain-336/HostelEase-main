import React from 'react';
import './App.css';
import Herosection from './pages/Herosection';
import Hostels from './pages/Hostels';
import Header from './components/Header';
import Progress from './pages/Progress';
import Footer from './components/Footer';






function App() {
  return (
    <>
    <Header/>
    <Herosection/>
    <Hostels/>
    <Progress/>
    <Footer/>
    

    <div className="App">
    </div>

    </>
      
  );
}
export default App;
