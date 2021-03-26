import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "../Header/Navbar";
// import Footer from "../Footer/Footer";
import List from "../List/List";
<<<<<<< HEAD
// import Login from "../Login/Login";
// import Signup from "../Signup/Signup.js";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     {/*<Route path="/" exact component={List} />*/}
    //     <Route path="/connection" exact component={Login} />
    //     <Route path="/inscription" component={Signup} />
    //   </Switch>
    //   <Footer />
    // </Router>
    <List/>
=======
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
>>>>>>> parent of 5fdeca4 (Update to dark mode)
  );
}

export default App;
