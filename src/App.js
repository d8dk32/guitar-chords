import React, { Component } from 'react';
import './App.css';
import ChordSelector from './ChordSelector.js';
import 'primereact/resources/themes/luna-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <ChordSelector/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
