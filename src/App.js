import React from 'react';
import { Provider } from 'react-redux';

import initStore from './store/store';

import Menu from './components/menu';
import Form from './components/form';

const App = () => (
  <Provider store={initStore()}>
    <Menu />
    <Form />
  </Provider>
);

export default App;
