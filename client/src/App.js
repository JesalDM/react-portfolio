import './App.css';
import Home from "./components/pages/Home"
import Portfolio from "./components/pages/Portfolio"
import AboutMe from "./components/pages/AboutMe"
import Contact from "./components/pages/Contact"
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";


function App() {
  return (
    <Router>
      <div className="App">
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
