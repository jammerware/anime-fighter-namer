#! /usr/bin/env node
declare let System: any;
import { 
    AnimeFighterNamer,
    HasSuffixDecider,
    PrefixNameMaker,
    PrimaryNameMaker,
    SuffixNameMaker
} from '../lib';

import { exec } from 'shelljs';

let namer = new AnimeFighterNamer(
    new PrefixNameMaker(),
    new PrimaryNameMaker(),
    new SuffixNameMaker(),
    new HasSuffixDecider()
);

if (process.argv.length < 1) {
    exec("echo What series, though?");
}
else {
    exec("echo " + namer.getName(process.argv.slice(2)[0]));
}