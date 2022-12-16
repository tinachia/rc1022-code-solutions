import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isOn: false,
      counter: 0
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    this.setState({ isOn: true });
    this.intervalId = setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000);
  }

  stop() {
    this.setState({ isOn: false });
    clearInterval(this.intervalId);
  }

  reset() {
    if (!this.state.isOn) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    const modifierClass = this.state.isOn ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    const status = this.state.isOn ? this.stop : this.start;
    return (
      <div className="container">
        <div onClick={this.reset} className="circle" >
          <p>{this.state.counter}</p>
        </div>
        <i onClick={status} className={modifierClass}></i>
      </div>
    );
  }
}
