var Hamming = function() {};

Hamming.prototype.compute = function(firstStrand, secondStrand) {
  var difference = 0;

  if(firstStrand.length !== secondStrand.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  for (var i = 0; i < firstStrand.length; i++) {
    if (firstStrand.charCodeAt(i) !== secondStrand.charCodeAt(i)) {
      difference++
    }
  }

  return difference;
}

module.exports = Hamming;