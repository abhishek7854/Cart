import './App.css';
import {Switch , BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Header from './components/Header'; 
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch> 
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
