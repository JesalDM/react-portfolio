import './App.css';
import Header from "./components/pages/Header"
import Home from "./components/pages/Home"
import Portfolio from "./components/pages/Portfolio"
import AboutMe from "./components/pages/AboutMe"
import Contact from "./components/pages/Contact"
import Footer from "./components/pages/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Header />
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/jesalmehta/aboutMe" component={AboutMe} />
            <Route exact path="/jesalmehta/portfolio" component={Portfolio} />
            <Route path="/jesalmehta/contact" component={Contact} />
          </div>
         <Footer />
      </Router>
    </div>
  );
}

export default App;
