class GuessingGame {
  constructor() {
    this.min;
    this.max;
    this.value;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    if(this.min <= this.max) {
      this.value = Math.round(this.max - (this.max - this.min) / 2);
      return this.value;
    }
  }

  lower() {
    this.max = this.value;
  }

  greater() {
    this.min = this.value;
  }
}

module.exports = GuessingGame;
