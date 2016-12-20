#! /usr/bin/env node
import { AnimeFighterNamer } from '../lib';

import { exec } from 'shelljs';

let namer = AnimeFighterNamer.create();

if (process.argv.length < 1) {
    exec("echo What series, though?");
}
else {
    exec("echo " + namer.getName(process.argv.slice(2)[0]));
}