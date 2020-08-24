import {Note, Accidental} from './Notes'

// adjust for octaves at some point
export class IntervalRetriever {
    matchAccidental(note) {
        return note.getAccidental() as Accidental | undefined
    }
    
    unison(note) {
       return note.halfStepDown().halfStepDown()
    }

    wholeStepUp(note:Note) {
        return note.halfStepUp().halfStepUp(this.matchAccidental(note))
    }

    minorThirdUp(note: Note) {
        return this.wholeStepUp(note).halfStepUp(this.matchAccidental(note))
    }

    majorThirdUp(note: Note) {
        return this.minorThirdUp(note).halfStepUp(this.matchAccidental(note))
    }

    perfectFourthUp(note: Note) {
        return this.majorThirdUp(note).halfStepUp(this.matchAccidental(note))
    }

    diminishedFifth(note: Note) {
        return this.perfectFourthUp(note).halfStepUp(this.matchAccidental(note))
    }

    perfectFifthUp(note: Note) {
        return this.diminishedFifth(note).halfStepUp(this.matchAccidental(note))
    }

    // aka minor 6
    augmentedFifthUp(note: Note) {
        return this.perfectFifthUp(note).halfStepUp(this.matchAccidental(note))
    }

    majorSixthUp(note: Note) {
        return this.augmentedFifthUp(note).halfStepUp(this.matchAccidental(note))
    }

    minorSeventhUp(note: Note) {
        return this.majorSixthUp(note).halfStepUp(this.matchAccidental(note))
    }
    
    majorSeventhUp(note: Note) {
        return this.minorSeventhUp(note).halfStepUp(this.matchAccidental(note))
    }
}