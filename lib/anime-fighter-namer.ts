import { HasSuffixDecider } from './has-suffix-decider';
import { PrefixNameMaker } from './prefix-name-maker';
import { PrimaryNameMaker } from './primary-name-maker';
import { SuffixNameMaker } from './suffix-name-maker';

export class AnimeFighterNamer {
    constructor(
        private prefixNamer: PrefixNameMaker,
        private primaryNamer: PrimaryNameMaker,
        private suffixNamer: SuffixNameMaker,
        private hasSuffixDecider: HasSuffixDecider) { }

    getName(seriesName: string) {
        let base = `${seriesName}: ${this.prefixNamer.getPrefix()} ${this.primaryNamer.getPrimaryName()}`;

        if(this.hasSuffixDecider.hasSuffix()) {
            base += ` ${this.suffixNamer.getSuffix()}`;
        }

        return base;
    }

    static create(): AnimeFighterNamer {
        return new AnimeFighterNamer(
           new PrefixNameMaker(),
           new PrimaryNameMaker(),
           new SuffixNameMaker(),
           new HasSuffixDecider() 
        );
    }
}