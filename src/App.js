import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav/>
    <div className="App">
      <p className='text-3xl text-red-900'>HostelEase</p>
      <p className='text-3xl text-yellow-800'> we provide you with the best Hotels in the town</p>
    </div>
    <div>
      <h1> hostels</h1>
    </div>
    </>
      
  );
}

export default App;
