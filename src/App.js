import './App.css';
import Home from "./Components/Home/Home"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <Switch>
      <Navbar>
        <Route exact path="/" component={Home} />
      </Navbar>
    </Switch>
  );
}

export default App;
