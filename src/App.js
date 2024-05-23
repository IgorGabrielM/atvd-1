import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AboutYou } from './pages/About-you';
import { Experience } from './pages/Experience';
import { Hobby } from './pages/Hobby';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <AboutYou />
          </Route>

          <Route path="/experience" exact>
            <Experience />
          </Route>

          <Route path="/hobby" exact>
            <Hobby />
          </Route>

          <Route path="/" exact>
            <AboutYou />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
