import './App.css';
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <Home />
      <Portfolio />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
