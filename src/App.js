import './App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import './index.css';
//import Footer from './components/Footer';
//import Nav from './components/Nav';//
//import { BrowserRouter as Router, Route }  from 'react-router-dom';
//import Home from './pages/Home';
//import Books from './pages/Books';
//import { books } from './data';
//import Bookinfo from './pages/Bookinfo';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
       
    </div>
  );
}

export default App;
