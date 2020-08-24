import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import './App.css';

function App() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} handleFormSubmit={handleFormSubmit}/>
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
    

export default App;
