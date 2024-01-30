import type { Component } from 'solid-js';

import { Router, Route } from "@solidjs/router";
import Index from './routes/Index';
import Hello from './routes/hello/Hello';
import connectionPage from './routes/users/connectionPage';

const App: Component = () => {
  return (
    <>
      <nav> {/** TODO make pretty */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/hello">Hello</a></li>
          <li><a href="/users/connection">Connection</a></li>
        </ul>
      </nav>

      <Router>
        <Route path="/" component={Index} />
        <Route path="/hello" component={Hello} />
        <Route path="/users/connection" component={connectionPage} />
        <Route path="/users/:id" component={connectionPage} />
      </Router>
      
    </>
  );
};

export default App;
