import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { ContextProvider } from './context/MainContext';
import Contests from './pages/Contests';
import { Home } from './pages/Home';
import TestPage from './pages/TestPage';

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

    <Container>
      <ContextProvider>
        {/* <Switch>
        {routes.map((route, i) => (
			<RouteWithSubRoutes key={i} {...route} />
			))}
		</Switch> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/problems" element={<p>Problems</p>} />
            <Route path="/profile" element={<p>Profile</p>} />
          </Routes>
        </Router>
      </ContextProvider>
    </Container>
    // </Router>
  );
};

const Container = styled.div`
  margin: 0 -20px;
`;
