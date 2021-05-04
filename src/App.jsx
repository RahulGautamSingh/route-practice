import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
