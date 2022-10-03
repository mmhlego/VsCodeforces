import React, { useEffect } from 'react';
import { Link, MemoryRouter as Router, Switch } from 'react-router-dom';
import { ReloadMessage } from '../../src/view/messages/messageTypes';
import { ContextProvider } from '../context/MainContext';
import { routes } from '../routes/config';
import { RouteWithSubRoutes } from '../routes/RouteWithSubRoutes';

export const App = () => {
  const handleReloadWebview = () => {
    vscode.postMessage<ReloadMessage>({
      type: 'RELOAD',
    });
  };

  return (
    <Router initialEntries={['/', '/about', '/message', '/message/received', '/message/send']}>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/message">Message</Link>
        </li>
      </ul>
      <button onClick={handleReloadWebview}>Reload Webview</button>

      <ContextProvider>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </ContextProvider>
    </Router>
  );
};
