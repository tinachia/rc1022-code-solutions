import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'off' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.status === 'off') {
      this.setState({ status: 'on' });
    } else if (this.state.status === 'on') {
      this.setState({ status: 'off' });
    }
  }

  render() {
    let toggle;
    let slider;
    let text;
    if (this.state.status === 'off') {
      toggle = 'outside';
      slider = 'left';
      text = 'Off';
    } else {
      toggle = 'outside-after';
      slider = 'right';
      text = 'On';
    }
    return (
      <div>
        <button className={toggle} onClick={this.handleClick}>
          <span className={slider}></span>
        </button>
        <span>{text}</span>
      </div>
    );
  }
}
