import React from 'react';
import Login from './pages/Login'
import Token from './pages/Token'
import Todos from './pages/Todos'
import { ThemeProvider } from 'styled-components'
import { Router } from '@reach/router'
import { 
  Container,
  Header,
  Logo
} from './App.css'


const theme = {
  primary: '#007bff',
  secondarytextColor: '#FFFFFC'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Header>
          <Logo>
            //TODO
          </Logo>
          <div>
            (mongoose, redux, styled-components, express, ts, shard, reach/router)
          </div>
        </Header>
        <Container>
          <Router>
            <Login path="/"/>
            <Todos path="/todos"/>
            <Token path="/token/:token"/>
          </Router>
        </Container>
    </ThemeProvider>
  );
}

export default App;
