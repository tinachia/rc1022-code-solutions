import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ clicks: this.state.clicks + 1 }));
  }

  render() {
    let color;
    if (this.state.clicks <= 3) {
      color = 'cold';
    } else if (this.state.clicks >= 4 && this.state.clicks <= 6) {
      color = 'warming';
    } else if (this.state.clicks >= 7 && this.state.clicks <= 9) {
      color = 'warm';
    } else if (this.state.clicks >= 10 && this.state.clicks <= 12) {
      color = 'warmer';
    } else if (this.state.clicks >= 13 && this.state.clicks <= 15) {
      color = 'hot';
    } else if (this.state.clicks >= 16) {
      color = 'fire';
    }
    return <button onClick={this.handleClick} className={color}>Hot Button</button>;
  }
}
