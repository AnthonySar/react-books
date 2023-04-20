import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AddBooks from './containers/AddBooks';
import SearchBooks from './components/SearchBooks';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<AddBooks />} />
          <Route path='/search' element={<SearchBooks />} />
        </Routes>
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;
