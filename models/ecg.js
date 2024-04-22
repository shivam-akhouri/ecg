class ECG {
  constructor(
    timestamp,
    lowAlpha,
    highAlpha,
    lowBeta,
    highBeta,
    lowGamma,
    midGamma,
    theta,
    delta
  ) {
    this.timestamp = timestamp;
    this.theta = theta;
    this.lowGamma = lowGamma;
    this.midGamma = midGamma;
    this.delta = delta;
    this.lowAlpha = lowAlpha;
    this.highAlpha = highAlpha;
    this.lowBeta = lowBeta;
    this.highBeta = highBeta;
  }

  toString() {
    return `ECG Data:
      Theta: ${this.theta},
      Low Gamma: ${this.lowGamma},
      Mid Gamma: ${this.midGamma},
      Delta: ${this.delta},
      Low Alpha: ${this.lowAlpha},
      High Alpha: ${this.highAlpha},
      Low Beta: ${this.lowBeta},
      High Beta: ${this.highBeta}`;
  }
  toMap() {
    return {
      timestamp: this.timestamp,
      lowAlpha: this.lowAlpha,
      highAlpha: this.highAlpha,
      lowBeta: this.lowBeta,
      highBeta: this.highBeta,
      lowGamma: this.lowGamma,
      midGamma: this.midGamma,
      delta: this.delta,
      theta: this.theta,
    };
  }
}

module.exports = ECG