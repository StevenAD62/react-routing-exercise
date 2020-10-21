import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from "./containers/Course/Course";
import Users from './containers/Users/Users';
import Summary from "./containers/Summary/Summary";

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <nav>
              <NavLink to="/">Summary</NavLink>
              <NavLink to="/users" style={{paddingLeft: '50px'}}>User Page</NavLink>
              <NavLink to="/courses" style={{paddingLeft: '50px'}}>Courses Page</NavLink>
            </nav>
            <Switch>
              <Route path="/users" component={Users}/>
              <Route path="/courses" component={Courses}/>
              <Route path="/course/:id" component={Course}/>
              <Route path="/" exact component={Summary}/>
              <Redirect from="/all-courses" to="/courses" />
              <Route render={() => <div style={{paddingTop: '50px'}}>Sorry, wrong way...</div>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
