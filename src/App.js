import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Logout from "./components/pages/Logout";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Todo from "./components/pages/Todo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/education" exact component={Education} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/todo" exact component={Todo} />
        </Switch>
        <Footer className="footer" />
      </Router>
    </>
  );
}

export default App;
