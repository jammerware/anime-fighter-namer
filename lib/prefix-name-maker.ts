import './array';

let PREFIXES: string[] = [
    'Astral',
    'Beta',
    'Coniferous',
    'Critical',
    'Dawning',
    'Eastward',
    'Ferric',
    'Foetid',
    'Gerund',
    'Geronimo',
    'Hailstorm',
    'Iridian',
    'Jade-shaped',
    'Knockaround',
    'Longitudinal',
    'Möbius',
    'Mortiferous',
    'Niagaran',
    'Oblast',
    'Partisan',
    'Phlebotomic',
    'Quirion',
    'Rarified',
    'Stoic',
    'Teutonic',
    'Vilified',
    'Wayfaring',
    'Xanthic',
    'Yearling',
    'Zootropic'
];

export class PrefixNameMaker {
    getPrefix(): string {
        return PREFIXES.random();
    }
}