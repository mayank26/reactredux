import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import HookIcecreamContainer from './components/HookIcecreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HookIcecreamContainer/>
      <HookCakeContainer/>
      <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
