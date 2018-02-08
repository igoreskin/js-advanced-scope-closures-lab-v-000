function produceDrivingRange(blockRange) {
  return function(start, end) {
    let blocks = Math.abs(start.slice(0, -2) - end.slice(0, -2));
    return (blocks <= blockRange ? `within range by ${blockRange - blocks}` : `${blocks - blockRange} blocks out of range`)
  };
}

function produceTipCalculator(percentage) {
  return function(price) {
    return price * percentage;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
