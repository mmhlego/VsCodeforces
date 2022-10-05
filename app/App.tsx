import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/MainContext';
import { Home } from './pages/Home';

export const App = () => {
  //   const handleReloadWebview = () => {
  //     vscode.postMessage<ReloadMessage>({
  //       type: 'RELOAD',
  //     });
  //   };

  return (
    // <Router initialEntries={['/', '/about', '/message', '/message/received', '/message/send']}>
    //   <ul className="navbar">
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/message">Message</Link>
    //     </li>
    //   </ul>
    //   <button onClick={handleReloadWebview}>Reload Webview</button>

    <ContextProvider>
      {/* <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ContextProvider>
    // </Router>
  );
};
