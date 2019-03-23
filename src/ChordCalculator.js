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

function determineFretNumbersV2(noteLetters) {
    var fretNums = [-1,-1,-1,-1,-1,-1];
    //assign root note
    const nbs = notesByString;
    var rootString = 5; //actually the 6th string
    var rootFret = nbs[5].indexOf(noteLetters[0]);
    if (rootFret < 9)
        fretNums[5] = rootFret;
    else 
    {
        rootFret = nbs[4].indexOf(noteLetters[0]);
        fretNums[4] = rootFret;
        rootString = 4; //actually the 5th string
    }
    
    //assign the remaining notes from the top down
    if (noteLetters[3] !== undefined) //start with the 7th if it exists
    {
        var noteAssigned = false;
        var checkString = rootString-1;
        while (!noteAssigned) 
        {
            var extFret = nbs[checkString].indexOf(noteLetters[3]);
            if (extFret - rootFret > -1 && extFret - rootFret < 4) 
            {
                noteAssigned = true;
                fretNums[checkString] = extFret;
            }
            else 
            {
                checkString -= 1;
                if(checkString < 0)
                    noteAssigned = true;
                
            }
        }
    }
    if (noteLetters[2] !== undefined) //start with the 7th if it exists
    {
        var noteAssigned = false;
        var checkString = rootString-1;
        while (!noteAssigned) 
        {
            var extFret = nbs[checkString].indexOf(noteLetters[2]);
            if (extFret - rootFret > -1 && extFret - rootFret < 4) 
            {
                noteAssigned = true;
                fretNums[checkString] = extFret;
            }
            else 
            {
                checkString -= 1;
                if(checkString < 0)
                    noteAssigned = true;
                
            }
        }
        
    }
    if (noteLetters[1] !== undefined) //start with the 7th if it exists
    {
        var noteAssigned = false;
        var checkString = rootString-1;
        while (!noteAssigned) 
        {
            var extFret = nbs[checkString].indexOf(noteLetters[1]);
            if (extFret - rootFret > -1 && extFret - rootFret < 4) 
            {
                noteAssigned = true;
                fretNums[checkString] = extFret;
            }
            else 
            {
                checkString -= 1;
                if(checkString < 0)
                    noteAssigned = true;
                
            }
        }
    }
    //try to add octave
    if ( fretNums[rootString-2] === -1)
        fretNums[rootString-2] = rootFret+2;

    return fretNums;
}

export { determineNoteLetters, determineFretNumbers, determineFretNumbersV2 };