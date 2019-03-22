const notesInOrder = ['Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G'];

const notesByString= [['E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E'],  //highest pitched
                      ['B','C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'],
                      ['G','Ab','A','Bb','B','C','Db','D','Eb','E','F','Gb','G'],  //one octave
                      ['D','Eb','E','F','Gb','G','Ab','A','Bb','B','C','Db','D'],  //on each string
                      ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab','A'],
                      ['E','F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E']]; //lowest pitched

function determineNoteLetters(rootNote,chordType){

    var rootIndex = notesInOrder.indexOf(rootNote);
    var noteLetters = [rootNote];

    if (chordType==='maj')
    {
        noteLetters.push(notesInOrder[rootIndex+4]); //3rd
        noteLetters.push(notesInOrder[rootIndex+7]); //5th
    }
    else if (chordType==='min')
    {
        noteLetters.push(notesInOrder[rootIndex+3]);
        noteLetters.push(notesInOrder[rootIndex+7]);
    }
    else if (chordType==='dim')
    {
        noteLetters.push(notesInOrder[rootIndex+3]);
        noteLetters.push(notesInOrder[rootIndex+6]);
    }
    else if (chordType==='+')
    {
        noteLetters.push(notesInOrder[rootIndex+5]);
        noteLetters.push(notesInOrder[rootIndex+8]);
    }
    else if (chordType==='7')
    {
        noteLetters.push(notesInOrder[rootIndex+4]);
        noteLetters.push(notesInOrder[rootIndex+7]);
        noteLetters.push(notesInOrder[rootIndex+10]);
    }
    else if (chordType==='maj7')
    {
        noteLetters.push(notesInOrder[rootIndex+4]);
        noteLetters.push(notesInOrder[rootIndex+7]);
        noteLetters.push(notesInOrder[rootIndex+11]);
    }
    else if (chordType==='m7')
    {
        noteLetters.push(notesInOrder[rootIndex+3]);
        noteLetters.push(notesInOrder[rootIndex+7]);
        noteLetters.push(notesInOrder[rootIndex+10]);
    }

    //console.log(noteLetters);
    return noteLetters;
};

function determineFretNumbers(noteLetters) { //note letters should be an array of letters
    var i;
    var note = 0;
    var fretNums = [-1,-1,-1,-1,-1,-1];
    const nbs = notesByString;
    for(i=6; i--; i > -1) {
        if (note === noteLetters.length)
            note = 0;
        console.log(i);
        fretNums[i] = nbs[i].indexOf(noteLetters[note]);
        note += 1;
    }
    //console.log("fretNums: " + fretNums);
    return fretNums;
};

export { determineNoteLetters, determineFretNumbers };