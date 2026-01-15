import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';





//import Bookinfo from './pages/Bookinfo';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={Home} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
