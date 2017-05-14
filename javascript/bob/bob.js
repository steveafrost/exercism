function Bob() {
}

Bob.prototype.hey = function hey(sentence) {
  const endsInQMark = /\?$/.test(sentence);
  const hasAllUpper = sentence === sentence.toUpperCase();
  const hasLetters = /[a-z]/ig.test(sentence);
  const onlySpaces = /\s+$/g.test(sentence);
  const emptySentence = sentence.length === 0;

  if (hasAllUpper && hasLetters) {
    return 'Whoa, chill out!';
  } else if (endsInQMark) {
    return 'Sure.';
  } else if (onlySpaces || emptySentence) {
    return 'Fine. Be that way!';
  }

  return 'Whatever.';
};

module.exports = Bob;
