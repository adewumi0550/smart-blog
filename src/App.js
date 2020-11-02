import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './container/Home';
import About from './container/About';
import Contact from './container/Contact';
import Login from './container/Login';
import SignUp from './container/SignUp';
import Dashboard from './container/Dashboard';
import PostDetails from './components/PostDetails';
function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/signup" component={SignUp} />
         <Route exact path="/dashboard" component={Dashboard} />
         <Route exact path="/post/:details"  component={PostDetails}  />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
