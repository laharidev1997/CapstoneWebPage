
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Mentor from './Components/Mentor';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element = {<Home />} />
        <Route path="/mentor" element = {<Mentor />} />
        {/* <Route path = "/register" element = {<Register />} />
        <Route path = "/edit/:id" element = {<Edit />} />
        <Route path = "/detail/:id" element = {<Detail />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
