import './array';

let SUFFIXES: string[] = [
    '1th',
    '2rd',
    'Sth',
    '\^power\^',
    '(AGeS)',
    'dX [2]',
    '--Edition',
    'upSTART',
    'R_AGE',
    '(undo)'
];

export class SuffixNameMaker {
    getSuffix(): string {
        return SUFFIXES.random();
    }
}