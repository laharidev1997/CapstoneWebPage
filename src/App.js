
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Mentor from './Components/Mentor';
import Team from './Components/Team';
import Meetings from './Components/Meetings'
import WeeklyReports from './Components/WeeklyReports'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element = {<Home />} />
        <Route path="/mentor" element = {<Mentor />} />
        <Route path="/team" element = {<Team />} />
        <Route path="/meetings" element = {<Meetings />} />
        <Route path="/weekly" element = {<WeeklyReports />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
