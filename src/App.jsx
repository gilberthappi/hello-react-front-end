import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './store';
import Layout from './components/layout';
import Greeting from './components/greeting';

const App = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Greeting />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
