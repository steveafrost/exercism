function Bob() {
}

Bob.prototype.hey(sentence) {
  if (sentence.includes('?')) {
    return 'Sure.';
  } else if (sentence.includes('!')) {
    return 'Whoa, chill out!';
  } else if (sentence.length == 0) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
}
