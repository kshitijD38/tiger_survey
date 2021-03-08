import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import CreateSurvey from "./components/CreateSurvey";
import Published from "./components/Published";
// import Logo from "./logo.png";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [squestions, setSquestions] = useState([]);

  return (
    <div className="App">
      <div className="col-md-10 offset-md-1 col-12 text-center">
        {/* <Header /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/create">
              <Header />
              <CreateSurvey
                squestions={squestions}
                setSquestions={setSquestions}
              />
            </Route>
            <Route path="/published">
              <Header />
              <Published questions={squestions} />
            </Route>
            <Route path="/">
              <Header />
              <Menu />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
