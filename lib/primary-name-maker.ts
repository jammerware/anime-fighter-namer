import './array';

let NAMES: string[] = [
    'Arte',
    'Bell',
    'Chords',
    'Dart',
    'Edge',
    'Forester',
    'Gunpowder',
    'Hex',
    'Index',
    'Jeering',
    'Kutlass',
    'Lair',
    'Mirrorframe',
    'Nearfield',
    'Oculus',
    'Puissance',
    'Quarter',
    'Ridge',
    'Sierra',
    'Till',
    'Unguent',
    'Voice',
    'Welterweight',
    'X-mind',
    'Yeoman',
    'Zeal'
];

export class PrimaryNameMaker {
    getPrimaryName(): string {
        return NAMES.random();
    }
}