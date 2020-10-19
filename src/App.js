import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';
import Team from './pages/Team';
import Error from './pages/Error';
import Footer from './components/Footer';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  ::after {
    content: '';
    display: block;
    height: 500px;
  };
`;

function App() {
    return (
    <AppContainer >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/team" component={Team} />
          <Route path="/newemployee" component={NewEmployee} />
          <Route component={Error} />
        </Switch>
      <Footer />
    </AppContainer>
  );
}

export default App;
