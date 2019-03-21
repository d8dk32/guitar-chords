import React, { Component } from 'react';
import {Dropdown} from 'primereact/dropdown';
import 'primereact/resources/themes/luna-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ChordDiagram from './ChordDiagram.js';

class ChordSelector extends Component {

  state = {
      rootNote: 'F',
      chordType: 'maj',
      chordAdditions: 'None'
  };

  notesInOrder = ['Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G'];

  chordAdditions = [
      {label: 'None', value:'None'},
      {label: '7', value: '7'},
      {label: '9', value: '9'},
      {label: 'b5', value: 'b5'}
  ];
  
  chordTypeOptions = [
      {label: 'Major', value:'maj'},
      {label: 'Minor', value:'min'},
      {label: 'Dim', value:'Dim'},
      {label: 'Aug', value:'Aug'},
  ];
  
  rootNoteOptions =  [
      {label: 'Ab', value: 'Ab'},
      {label: 'A', value: 'A'},
      {label: 'Bb', value: 'Bb'},
      {label: 'B', value: 'B'},
      {label: 'C', value: 'C'},
      {label: 'Db', value: 'Db'},
      {label: 'D', value: 'D'},
      {label: 'Eb', value: 'Eb'},
      {label: 'E', value: 'E'},
      {label: 'F', value: 'F'},
      {label: 'Gb', value: 'Gb'},
      {label: 'G', value: 'G'},
  ];
  

    handleRootSelection = (event) => {
      this.setState({rootNote: event.value});
    };

    handleTypeSelection = (event) => {
      this.setState({chordType: event.value});
    };

    handleAddSelection = (event) => {
      this.setState({chordAdditions: event.value});
    };


    render() {
      return (
        <div>
          <p style={{margin: '5px'}}>Selected Chord: {this.state.rootNote + 
                                      (this.state.chordType !== 'maj' ? this.state.chordType : '') + 
                                      (this.state.chordAdditions !== 'None' ? this.state.chordAdditions : '')}
          </p>
          <div  align="left">
            <Dropdown id='rootNote' style={{margin: '5px'}} value={this.state.rootNote} options={this.rootNoteOptions} onChange={this.handleRootSelection}/>
            <Dropdown id='chordType' style={{margin: '5px'}} value={this.state.chordType} options={this.chordTypeOptions} onChange={this.handleTypeSelection}/>
            <Dropdown id='chordType' style={{margin: '5px'}} value={this.state.chordAdditions} options={this.chordAdditions} onChange={this.handleAddSelection}/>
          </div>
          <br/>
          <ChordDiagram rootNote={this.state.rootNote} chordType={this.state.chordType} additions={this.state.chordAdditions}/>
        </div>
      );
    }
};

export default ChordSelector;