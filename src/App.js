import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Header from './layouts/Header';
import Progress from './pages/Progress';
import Footer from './layouts/Footer';
import AllHostels from './services/AllHostels';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Studentform from './components/Studentform';
import layouts from './layouts';

function App() {
  return (
    <>
            <Router>
            <Routes>
                <Route path="/" element={
                 <layouts> <Home /></layouts>
                }
                   />
                <Route path="/About" element={
                 <layouts> <About /></layouts>
                } 
                />
                <Route path="/Cities" element={
                  <layouts><Cities /></layouts>
                } 
                  />
                <Route path="/AllHostels" element={
                 <layouts> <AllHostels /></layouts>
              } />
                <Route path="/Progress" element={
                  <layouts><Progress /></layouts>
              } />
                <Route path="/Header" element={<Header />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="/Signup" element={
                <Signup />
                } />
               <Route path="/Login" element={<Login />} />
               <Route path="/Studentform" element={<Studentform />} />

            </Routes>
        </Router>


    {/* <Header/>
    <Herosection/>
    <Cities/>
    <AllHostels/>
    <Progress/>
    <Footer/> */}
    

    {/* <div className="App">
    </div> */}

    </>
      
  );
}
export default App;
