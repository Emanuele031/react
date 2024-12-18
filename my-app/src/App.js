import React from 'react';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

const App = () => (
  <div>
    <MyNav />
    <Welcome />
    <AllTheBooks />
    <MyFooter />
  </div>
);

export default App;

