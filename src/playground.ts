import * as noteLib from './'

const chordToString = (chord:noteLib.Chord) => {
    return chord.notes.map(note => note.name).join(' ')
}


// Dependency Inject this
const intervalRetriever = new noteLib.IntervalRetriever()
const chordBuilder = new noteLib.ChordBuilder(intervalRetriever)
const firstChord = chordBuilder.buildMajor(new noteLib.FSharp(), true)


console.log(chordToString(firstChord))