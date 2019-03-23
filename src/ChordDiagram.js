import React, { Component } from 'react';
import { determineNoteLetters, determineFretNumbers, determineFretNumbersV2 } from './ChordCalculator.js';

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

    updateChordDiagram = (fretNums) => {
        this.setState(state=>({
            note1string: 1,
            note1fret: fretNums[0],
            note2string: 2,
            note2fret: fretNums[1],
            note3string: 3,
            note3fret: fretNums[2],
            note4string: 4,
            note4fret: fretNums[3],
            note5string: 5, 
            note5fret: fretNums[4],
            note6string: 6,
            note6fret: fretNums[5]
        }));
    }

    determineFingering = () => {
        //figure out the letter notes that belong in this chord
        const { rootNote } = this.props;
        const { chordType } = this.props;

        var noteLetters = determineNoteLetters(rootNote,chordType);
        var fretNums = determineFretNumbersV2(noteLetters);
        return fretNums;
    };

    getCircleX = (string) => {
        var finger = this.determineFingering();
        if (string < 0)
            return -20;
        return 10 + 64*finger[string];
    };

    getCircleY = (string) => {
        return 28+28*string;
    };

    render() {
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
                
                <circle cx={this.getCircleX('0')} cy={this.getCircleY('0')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('1')} cy={this.getCircleY('1')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('2')} cy={this.getCircleY('2')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('3')} cy={this.getCircleY('3')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('4')} cy={this.getCircleY('4')} r="10" fill="brown"/>
                <circle cx={this.getCircleX('5')} cy={this.getCircleY('5')} r="10" fill="brown"/>

            </svg> 
        </div>
        );
    }
};

export default ChordDiagram;