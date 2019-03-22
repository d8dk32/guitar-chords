import React, { Component } from 'react';

class ChordDiagram extends Component {

    state={
        note1string: 6,
        note1fret: 1,
        note2string: 5,
        note2fret: 3,
        note3string: 4,
        note3fret: 3,
        note4string: 3,
        note4fret: 2,
        note5string: 2, 
        note5fret: 1,
        note6string: 1,
        note6fret: 1
    };

    notesInOrder = ['Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G'];
    
    getCircleX = (note) => {
        var fret = this.state['note'+ note +'fret'];
        if (fret < 0)
            return -20;
        return 10 + 64*fret;
    };

    getCircleY = (note) => {
        var string = this.state['note'+ note +'string'];
        if (string < 1 || string > 6)
            return -20;
        return 28*string;
    };

    determineNotesInChord = () => {
        //figure out the letter notes that belong in this chord
        const { rootNote } = this.props;
        const { chordType } = this.props;

        var rootIndex = this.notesInOrder.indexOf(rootNote);
        var noteLetters = [rootNote];

        if (chordType==='maj')
        {
            noteLetters.push(this.notesInOrder[rootIndex+4]); //3rd
            noteLetters.push(this.notesInOrder[rootIndex+7]); //5th
        }
        else if (chordType==='min')
        {
            noteLetters.push(this.notesInOrder[rootIndex+3]);
            noteLetters.push(this.notesInOrder[rootIndex+7]);
        }
        else if (chordType==='dim')
        {
            noteLetters.push(this.notesInOrder[rootIndex+3]);
            noteLetters.push(this.notesInOrder[rootIndex+6]);
        }
        else if (chordType==='+')
        {
            noteLetters.push(this.notesInOrder[rootIndex+5]);
            noteLetters.push(this.notesInOrder[rootIndex+8]);
        }
        else if (chordType==='min')
        {
            noteLetters.push(this.notesInOrder[rootIndex+3]);
            noteLetters.push(this.notesInOrder[rootIndex+7]);
        }
        else if (chordType==='7')
        {
            noteLetters.push(this.notesInOrder[rootIndex+4]);
            noteLetters.push(this.notesInOrder[rootIndex+7]);
            noteLetters.push(this.notesInOrder[rootIndex+10]);
        }
        else if (chordType==='7')
        {
            noteLetters.push(this.notesInOrder[rootIndex+4]);
            noteLetters.push(this.notesInOrder[rootIndex+7]);
            noteLetters.push(this.notesInOrder[rootIndex+10]);
        }
        else if (chordType==='maj7')
        {
            noteLetters.push(this.notesInOrder[rootIndex+4]);
            noteLetters.push(this.notesInOrder[rootIndex+7]);
            noteLetters.push(this.notesInOrder[rootIndex+11]);
        }
        else if (chordType==='m7')
        {
            noteLetters.push(this.notesInOrder[rootIndex+3]);
            noteLetters.push(this.notesInOrder[rootIndex+7]);
            noteLetters.push(this.notesInOrder[rootIndex+10]);
        }

        console.log(noteLetters);
    };

    render() {
        this.determineNotesInChord();
        return (

        <div>
            <svg height="200" width="820">
                <rect x="0" y="14" width="820" height="170" fill="peru"/>
                <rect x="20" y="14" width="10" height="170" fill="papayawhip"/>

                <line x1="94" y1="14" x2="94" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="158" y1="14" x2="158" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="222" y1="14" x2="222" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="286" y1="14" x2="286" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="350" y1="14" x2="350" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="414" y1="14" x2="414" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="478" y1="14" x2="478" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="542" y1="14" x2="542" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="606" y1="14" x2="606" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="670" y1="14" x2="670" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="734" y1="14" x2="734" y2="184" stroke="silver" strokeWidth="2"/>
                <line x1="798" y1="14" x2="798" y2="184" stroke="silver" strokeWidth="2"/>

                <line x1="0" y1="28" x2="820" y2="28" stroke="black" />
                <line x1="0" y1="56" x2="820" y2="56" stroke="black" />
                <line x1="0" y1="84" x2="820" y2="84" stroke="black" />
                <line x1="0" y1="112" x2="820" y2="112" stroke="black" />
                <line x1="0" y1="140" x2="820" y2="140" stroke="black" />
                <line x1="0" y1="168" x2="820" y2="168" stroke="black" />
                
                <circle cx={this.getCircleX('1')} cy={this.getCircleY('1')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('2')} cy={this.getCircleY('2')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('3')} cy={this.getCircleY('3')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('4')} cy={this.getCircleY('4')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('5')} cy={this.getCircleY('5')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('6')} cy={this.getCircleY('6')} r="10" fill="brown"/>

            </svg> 
        </div>
        );
    }
};

export default ChordDiagram;