import logo from './logo.svg';
import './App.css';
import './css/styles.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Web from './routes/Web';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
        <Nav></Nav>
        <Web></Web>
        <Footer></Footer>
    </div>
    </Router>
  );
}
export default App;
