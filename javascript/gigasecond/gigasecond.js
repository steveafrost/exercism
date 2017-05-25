function Gigasecond(birthday) {
  this.birthday = birthday;
}

Gigasecond.prototype.date = function date() {
  const startSeconds = this.birthday.getTime() / 1000;
  const endSeconds = startSeconds + 1000000000;

  return endSeconds;
};

module.exports = Gigasecond;
