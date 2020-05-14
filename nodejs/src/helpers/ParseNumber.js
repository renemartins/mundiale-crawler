class ParseNumber {
  static price(int = 0, decimal = "0") {
    return Number.parseFloat(`${int.replace(".", "")}.${decimal}`).toFixed(2);
  }
}

module.exports = ParseNumber;
