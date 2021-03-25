import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import List from "../List/List";
import Login from "../Login/Login";
import Signup from "../Signup/Signup.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/*<Route path="/" exact component={List} />*/}
        <Route path="/connection" exact component={Login} />
        <Route path="/inscription" component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
