import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Header from './Layouts/Header';
import Progressbar from './pages/Progress';
import Footer from './Layouts/Footer';
import AllHostels from './services/AllHostels';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Studentform from './components/Studentform';
import Dashboard from './services/Dashboard';
import Layouts from './Layouts';
import Dashboards from './Layouts/Dashboards';


function App() {
  return (
    <>
            <Router>
            <Routes>
                <Route path="/" element={
                 <Layouts>
                   <Home />
                   </Layouts>
                }
                   />
                 <Route path="/About" element={
                 <Layouts>
                   <About />
                   </Layouts>
                }
                   />
                <Route path="/Cities" element={
                  <Layouts>
                  <Cities />
                  </Layouts>
                  } 
                  />
                <Route path="/AllHostels" element={
                 <Layouts>
                 <AllHostels />
                 </Layouts>
              } />
                <Route path="/Progress" element={
                  <Layouts>
                  <Progressbar />
                  </Layouts>
              } />
                <Route path="/Header" element={<Header />} />
                <Route path="/Footer" element={
                  <Dashboards>
                    <Footer />
                  </Dashboards>
                  } />
                <Route path="/Signup" element={
                <Signup /> } />
               <Route path="/Login" element={<Login />
              } />
               <Route path="/Studentform" element={
              <Layouts>
              <Studentform />
              </Layouts>
              } 
                />
                 <Route path="/Dashboard" element={
              <Dashboards>
              <Dashboard />
              </Dashboards>
              } 
                />


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
