import './App.css';
import React from 'react';
import { store } from './actions/store';
import {Provider} from 'react-redux'
import Profiles from './components/Profiles';
import {Container} from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <Container max-width='lg'>
        <Profiles />
      </Container>
      
    </Provider>
  );
}

export default App;
