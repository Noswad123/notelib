import { IntervalRetriever } from './IntervalRetriever'
import { Note } from './Notes'

export type Inversion = number | 'Root'

export type Chord = {
    rootNote: Note
    notes: Note[]
    inversion: Inversion
}

export class ChordBuilder {
    constructor(
        private intervalRetriever: IntervalRetriever
    ) {

    }
    buildSusTwo(rootNote: Note): Chord {
        const second = this.intervalRetriever.wholeStepUp(rootNote)
        const majorFifth = this.intervalRetriever.perfectFourthUp(second)
        return {
            rootNote,
            notes: [rootNote, second, majorFifth],
            inversion: 'Root'
        }
    }

    buildSusFour(rootNote: Note): Chord {
        const perfectFourth = this.intervalRetriever.perfectFourthUp(rootNote)
        const majorFifth = this.intervalRetriever.wholeStepUp(perfectFourth)
        return {
            rootNote,
            notes: [rootNote, perfectFourth, majorFifth],
            inversion: 'Root'
        }
    }
    buildMajor(rootNote: Note, addSeven?:boolean): Chord
     {
        const majorThird = this.intervalRetriever.majorThirdUp(rootNote)
        const majorFifth = this.intervalRetriever.minorThirdUp(majorThird)
        const chord: Chord = {
            rootNote,
            notes: [rootNote, majorThird, majorFifth],
            inversion: 'Root'
        }
        if (addSeven) {
            const majorSeventh = this.intervalRetriever.majorThirdUp(majorFifth)
            chord.notes.push(majorSeventh)
        }
        return chord
    }

    buildMinor(rootNote: Note, addSeven?: boolean): Chord {
        const minorThird = this.intervalRetriever.minorThirdUp(rootNote)
        const diminishedFifth = this.intervalRetriever.majorThirdUp(minorThird)
        const chord: Chord = {
            rootNote,
            notes: [rootNote, minorThird, diminishedFifth],
            inversion: 'Root'
        }

        if (addSeven) {
            const flatSeventh = this.intervalRetriever.majorThirdUp(diminishedFifth)
            chord.notes.push(flatSeventh)
        }
        return chord
    }

    buildMajorThirteen(rootNote): Chord {
        const majorChord = this.buildMajor(rootNote, true)
        const secondNote = this.intervalRetriever.wholeStepUp(rootNote)
        const minorChord = this.buildMinor(secondNote)

        return {
            rootNote,
            notes: majorChord.notes.concat(minorChord.notes),
            inversion: 'Root'
        }
    }
    buildInversion(chord: Chord, inversion?: Inversion) {
        if(typeof inversion === 'number' && inversion > chord.notes.length) {
            const notesToBeInverted = chord.notes.splice(0, inversion-1)
            chord.notes.concat(notesToBeInverted)
        }
        return chord
    }
}