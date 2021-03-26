import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import List from "../List/List";
import Login from "../Login/Login";
import Signup from "../Signup/Signup.js";
import Home from "../Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/*<Route path="/" exact component={List} />*/}
        <Route path="/" exact component={Home} />
        <Route path="/connection" exact component={Login} />
        <Route path="/inscription" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
