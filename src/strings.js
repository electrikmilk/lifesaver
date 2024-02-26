const irregular_plural_nouns = {
    'aircraft': 'aircraft',
    'alumna': 'alumnae',
    'alumnus': 'alumni',
    'analysis': 'analyses',
    'antenna': 'antennae',
    'antithesis': 'antitheses',
    'apex': 'apexes',
    'appendix': 'appendixes',
    'axis': 'axes',
    'bacillus': 'bacilli',
    'bacterium': 'bacteria',
    'basis': 'bases',
    'beau': 'beaux',
    'bison': 'bison',
    'bureau': 'bureaus',
    'cactus': 'cacti',
    'child': 'children',
    'codex': 'codices',
    'concerto': 'concertos',
    'corpus': 'corpora',
    'crisis': 'crises',
    'criterion': 'criteria',
    'curriculum': 'curriculums',
    'datum': 'data',
    'deer': 'deer',
    'diagnosis': 'diagnoses',
    'die': 'dice',
    'dwarf': 'dwarves',
    'ellipsis': 'ellipses',
    'erratum': 'errata',
    'faux pas': 'faux pas',
    'fez': 'fezzes',
    'fish': 'fishes',
    'focus': 'focuses',
    'foot': 'feet or foot',
    'formula': 'formulae',
    'fungus': 'fungi',
    'genus': 'genuses',
    'goose': 'geese',
    'graffito': 'graffiti',
    'grouse': 'grouse',
    'half': 'halves',
    'hoof': 'hooves',
    'hypothesis': 'hypotheses',
    'index': 'indexes',
    'larva': 'larvae',
    'loaf': 'loaves',
    'locus': 'loci',
    'louse': 'lice',
    'man': 'men',
    'matrix': 'matrices',
    'minutia': 'minutiae',
    'moose': 'moose',
    'mouse': 'mice',
    'nebula': 'nebulae',
    'nucleus': 'nuclei',
    'oasis': 'oases',
    'offspring': 'offspring',
    'opus': 'opuses',
    'ovum': 'ova',
    'ox': 'oxen',
    'parenthesis': 'parentheses',
    'phenomenon': 'phenomena',
    'phylum': 'phyla',
    'quiz': 'quizzes',
    'radius': 'radii',
    'referendum': 'referendums',
    'salmon': 'salmon',
    'scarf': 'scarves',
    'self': 'selves',
    'series': 'series',
    'sheep': 'sheep',
    'shrimp': 'shrimp',
    'species': 'species',
    'stimulus': 'stimuli',
    'stratum': 'strata',
    'swine': 'swine',
    'syllabus': 'syllabi',
    'synopsis': 'synopses',
    'tableau': 'tableaux',
    'thesis': 'theses',
    'thief': 'thieves',
    'tooth': 'teeth',
    'trout': 'trout',
    'tuna': 'tuna',
    'vertebra': 'vertebrae',
    'vertex': 'vertices',
    'vita': 'vitae',
    'vortex': 'vortices',
    'wharf': 'wharves',
    'wife': 'wives',
    'wolf': 'wolves',
    'woman': 'women',
};

export function pluralize(word, value) {
    let plural = irregular_plural_nouns[word] ?? word + 's';
    return value !== 1 ? plural : word;
}

export function trimPrefix(str, prefix) {
    let string = str.split('');
    let prefixSlice = prefix.split('');
    let hasPrefix = true;
    for (let i = 0; i < prefixSlice.length; i++) {
        if (string[i] !== prefixSlice[i]) {
            hasPrefix = false;
        }
    }
    if (hasPrefix) {
        prefixSlice.forEach((c, i) => {
            string.splice(i, 1);
        });
    }
    return string.join('');
}

export function trimSuffix(str, suffix) {
    let string = str.split('').reverse();
    let suffixSlice = suffix.split('').reverse();
    let hasSuffix = true;
    for (let i = 0; i < suffixSlice.length; i++) {
        if (string[i] !== suffixSlice[i]) {
            hasSuffix = false;
        }
    }
    if (hasSuffix) {
        suffixSlice.forEach((c, i) => {
            string.splice(i, 1);
        });
    }
    return string.reverse().join('');
}

export function titleCase(str) {
    let nonTitles = ['of', 'a', 'the', 'and', 'an', 'or', 'nor', 'but', 'is', 'if', 'then', 'else', 'when', 'at', 'from', 'by', 'on', 'off', 'for', 'in', 'out', 'over', 'to', 'into', 'with'];
    let words = str.split(' ');
    words.forEach((word, idx) => {
        if (idx === 0 || !nonTitles.includes(word)) {
            words[idx] = word[0].toUpperCase() + word.substring(1, word.length);
        }
    });
    return words.join(' ');
}

export function stripTags(str) {
    return str.replace(/<\/?[^>]+(>|$)/gi, '');
}
