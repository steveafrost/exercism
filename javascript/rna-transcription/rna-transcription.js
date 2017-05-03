function DnaTranscriber() {
  this.toRna = function (dnaStrand) {
    let newStrand = '';

    for (let i = 0; i < dnaStrand.length; i += 1) {
      if (dnaStrand[i] === 'C') {
        newStrand += 'G';
      } else if (dnaStrand[i] === 'G') {
        newStrand += 'C';
      } else if (dnaStrand[i] === 'A') {
        newStrand += 'U';
      } else if (dnaStrand[i] === 'T') {
        newStrand += 'A';
      } else {
        throw new Error('Invalid input');
      }
    }

    return newStrand;
  };
}

module.exports = DnaTranscriber
