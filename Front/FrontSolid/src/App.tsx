import type { Component } from 'solid-js';

import { Router, Route } from "@solidjs/router";
import Index from './routes/Index';
import Hello from './routes/hello/Hello';
import connectionPage from './routes/users/connectionPage';
import registerPage from './routes/users/registerPage';

const App: Component = () => {
  return (
    <>
      <nav> {/** TODO make pretty */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/hello">Hello</a></li>
          <li><a href="/users/connection">Connection</a></li>
          <li><a href="/users/register">Register</a></li>
        </ul>
      </nav>

      <Router>
        <Route path="/" component={Index} />
        <Route path="/hello" component={Hello} />
        <Route path="/users/connection" component={connectionPage} />
        <Route path="/users/register" component={registerPage} />
        <Route path="/users/:id" component={Hello} />
      </Router>
      
    </>
  );
};

export default App;
