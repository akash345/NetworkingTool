import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';
import {render} from "@testing-library/react";


export const App = () => {
  const [url, setUrl] = useState<string>('');

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = {active: true, lastFocusedWindow: true};

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url!);
    });
  }, []);


  return (
      <div className="App">
        <header className="App-header">
          <MyForm />
          <p>URL:</p>
          <p>
            {url}
          </p>
        </header>
      </div>
  );
};

export default App;
