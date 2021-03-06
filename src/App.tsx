import React, { FC } from 'react';
import logo from './common/svg/logo.svg';
import './App.less';
import { Button } from 'antd';

const App: FC = () => {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
