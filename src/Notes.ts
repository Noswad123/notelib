export type Accidental = 'b' | '#'
export abstract class Note {
    abstract readonly name: NoteName
    protected octave = Octaves.oneLine as Octave
    abstract halfStepUp(matchAccidental?: Accidental): Note
    abstract halfStepDown(matchAccidental?: Accidental): Note

    public getAccidental() {
        return this.name.length === 2? this.name[1]: undefined
    }

    // move this to display note class
    protected DisplayOctave(octave: Octave) {
       switch(octave) {
            case 'contra':
                return   this.name + this.name
            case 'great':
                return this.name
            case 'small':
                return this.name.toLowerCase()
            case 'oneLine':
                return this.name + 'i'
            case 'twoLine':
                return this.name + 'ii'
            case 'threeLine':
                return this.name + 'iii'
           default:
               return 'Invalid octave'
       } 
    }
}
export const Octaves = {
    contra: '2 upper case note',
    great: 'upper case note',
    small: 'lower case note',
    oneLine: 'i',
    twoLine: 'ii',
    threeLine: 'iii'
}
export type Octave = keyof typeof Octaves;

export type NoteName =
    | 'A'
    | 'A#'
    | 'Bb'
    | 'B'
    | 'C'
    | 'C#'
    | 'Db'
    | 'D'
    | 'D#'
    | 'Eb'
    | 'E'
    | 'F'
    | 'F#'
    | 'Gb'
    | 'G'
    | 'G#'
    | 'Ab'



    export class A extends Note {
        public name: NoteName = 'A'
        constructor() {
            super()
        }

        halfStepDown(matchAccidental?: Accidental) {
            switch(matchAccidental){
                case '#':
                    return new GSharp()
                case 'b':
                default:
                    return new AFlat()
            }
        }
        halfStepUp(matchAccidental?: Accidental) {
            switch(matchAccidental){
                case '#':
                    return new ASharp()
                case 'b':
                default:
                    return new BFlat()
            }
        }
    };
    export class ASharp extends Note {
        public name: NoteName = 'A#'
        constructor() {
            super()
        }

        halfStepDown() {
            return new A()
        }
        halfStepUp() {
            return new B()
        }
    };

    export class AFlat extends Note {
        public name: NoteName = 'Ab'
        constructor() {
            super()
        }

        halfStepDown() {
            return new G()
        }
        halfStepUp() {
            return new A()
        }
    };

    export class B extends Note {
        public name: NoteName = 'B'
        constructor() {
            super()
        }

        halfStepDown(matchAccidental?: Accidental) {
            switch(matchAccidental) {
                case '#':
                    return new ASharp()
                case 'b':
                default:
                    return new BFlat()
            }
        }
        halfStepUp() {
            return new C()
        }
    };

    export class BFlat extends Note {
        public name: NoteName = 'Bb'
        constructor() {
            super()
        }

        halfStepDown() {
            return new A()
        }
        halfStepUp() {
            return new B()
        }
    };

    export class C extends Note {
        public name: NoteName = 'C'
        constructor() {
            super()
        }

        halfStepDown() {
            return new B()
        }
        halfStepUp(matchAccidental?: Accidental) {
            switch(matchAccidental) {
                case '#':
                    return new CSharp()
                case 'b':
                default:
                    return new DFlat()
            }
        }
    };

    export class CSharp extends Note {
        public name: NoteName = 'C#'
        constructor() {
            super()
        }

        halfStepDown() {
            return new C()
        }
        halfStepUp() {
            return new D()
        }
    };

    export class D extends Note {
        public name: NoteName = 'D'
        constructor() {
            super()
        }

        halfStepDown(matchAccidental?: Accidental) {
            switch(matchAccidental) {
                case '#':
                    return new CSharp()
                case 'b':
                default:
                    return new DFlat()
            }
        }
        halfStepUp(matchAccidental?: Accidental) {
            switch(matchAccidental) {
                case '#':
                    return new DSharp()
                case 'b':
                default:
                    return new EFlat()
            }
        }
    };

    export class DFlat extends Note {
        public name: NoteName = 'Db'
        constructor() {
            super()
        }

        halfStepDown() {
            return new C()
        }
        halfStepUp() {
            return new D()
        }
    };

    export class DSharp extends Note {
        public name: NoteName = 'D#'
        constructor() {
            super()
        }

        halfStepDown() {
            return new D()
        }
        halfStepUp() {
            return new E()
        }
    };

    export class E extends Note {
        public name: NoteName = 'E'
        constructor() {
            super()
        }

        halfStepDown(matchAccidental?: Accidental) {
            switch(matchAccidental) {
                case '#':
                    return new DSharp()
                case 'b':
                default:
                    return new EFlat()
            }
        }
        halfStepUp() {
            return new F()
        }
    };

    export class EFlat extends Note {
        public name: NoteName = 'Eb'
        constructor() {
            super()
        }

        halfStepDown() {
            return new D()
        }
        halfStepUp() {
            return new E()
        }
    };

    export class F extends Note {
        public name: NoteName = 'F'
        constructor() {
            super()
        }

        halfStepDown() {
            return new E()
        }
        halfStepUp(matchAccidental?: Accidental) {
            switch(matchAccidental) {
                case '#':
                    return new FSharp()
                case 'b':
                default:
                    return new GFlat()
            }
        }
    };

    export class FSharp extends Note {
        public name: NoteName = 'F#'
        constructor() {
            super()
        }

        halfStepDown() {
            return new F()
        }
        halfStepUp() {
            return new G()
        }
    };

    export class G extends Note {
        public name: NoteName = 'G'
        constructor() {
            super()
        }

        halfStepDown(matchAccidental?: Accidental) {
            switch(matchAccidental) {
                case '#':
                    return new FSharp()
                case 'b':
                default:
                    return new GFlat()
            }
        }
        halfStepUp(matchAccidental?: Accidental) {
            switch(matchAccidental) {
                case '#':
                    return new GSharp()
                case 'b':
                default:
                    return new AFlat()
            }
        }
    };

    export class GFlat extends Note {
        public name: NoteName = 'Gb'
        constructor() {
            super()
        }

        halfStepDown() {
            return new F()
        }
        halfStepUp() {
            return new G()
        }
    };

    export class GSharp extends Note {
        public name: NoteName = 'G#'
        constructor() {
            super()
        }

        halfStepDown() {
            return new G()
        }
        halfStepUp() {
            return new A()
        }
    };
