import React, { Component } from 'react';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/luna-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ChordDiagram from './ChordDiagram.js';

class ChordSelector extends Component {

  state = {
      rootNote: 'F',
      chordType: 'maj',
  };
  
  chordTypeOptions = [
      {label: 'Major', value:'maj'},
      {label: 'Minor', value:'min'},
      {label: 'Dim', value:'Dim'},
      {label: 'Aug', value:'Aug'},
  ];  

    handleRootSelection = (value) => {
      this.setState(state=>({rootNote: value}));
    };

    handleTypeSelection = (value) => {
      this.setState(state=>({chordType: value}));
    };   

    render() {
      return (
        <div>
          <p style={{margin: '5px'}}>Selected Chord: {this.state.rootNote + 
                                      (this.state.chordType !== 'maj' ? this.state.chordType : '')}
          </p>
          <div  align="left">
            <Button  id='Ab' label='Ab' onClick={()=>this.handleRootSelection('Ab')} style={{margin: '2px'}}/>
            <Button id='A' label='A' onClick={()=>this.handleRootSelection('A')} style={{margin: '2px'}}/>
            <Button id='Bb' label='Bb' onClick={()=>this.handleRootSelection('Bb')} style={{margin: '2px'}}/>
            <Button id='B' label='B' onClick={()=>this.handleRootSelection('B')} style={{margin: '2px'}}/>
            <Button id='C' label='C' onClick={()=>this.handleRootSelection('C')} style={{margin: '2px'}}/>
            <Button id='Db' label='Db' onClick={()=>this.handleRootSelection('Db')} style={{margin: '2px'}}/>
            <Button id='D' label='D' onClick={()=>this.handleRootSelection('D')} style={{margin: '2px'}}/>
            <Button id='Eb' label='Eb' onClick={()=>this.handleRootSelection('Eb')} style={{margin: '2px'}}/>
            <Button id='E' label='E' onClick={()=>this.handleRootSelection('E')} style={{margin: '2px'}}/>
            <Button id='F' label='F' onClick={()=>this.handleRootSelection('F')} style={{margin: '2px'}}/>
            <Button id='Gb' label='Gb' onClick={()=>this.handleRootSelection('Gb')} style={{margin: '2px'}}/>
            <Button id='G' label='G' onClick={()=>this.handleRootSelection('G')} style={{margin: '2px'}}/>
          </div>
          <hr/>
          <div  align="left">
            <Button id='Major' label={this.state.rootNote+' Major'} onClick={()=>this.handleTypeSelection('maj')} style={{margin: '2px'}}/>
            <Button id='Minor' label={this.state.rootNote+' Minor'} onClick={()=>this.handleTypeSelection('min')} style={{margin: '2px'}}/>
            <Button id='Diminished' label={this.state.rootNote+' Diminished'} onClick={()=>this.handleTypeSelection('dim')} style={{margin: '2px'}}/>
            <Button id='Augmented' label={this.state.rootNote+' Augmented'} onClick={()=>this.handleTypeSelection('+')} style={{margin: '2px'}}/>
            <Button id='7' label={this.state.rootNote+'7'} onClick={()=>this.handleTypeSelection('7')} style={{margin: '2px'}}/>
            <Button id='maj7' label={this.state.rootNote+'maj7'} onClick={()=>this.handleTypeSelection('maj7')} style={{margin: '2px'}}/>
            <Button id='m7' label={this.state.rootNote+'m7'} onClick={()=>this.handleTypeSelection('m7')} style={{margin: '2px'}}/>
          </div>
          <br/>
          <ChordDiagram rootNote={this.state.rootNote} chordType={this.state.chordType}/>
        </div>
      );
    }
};

export default ChordSelector;