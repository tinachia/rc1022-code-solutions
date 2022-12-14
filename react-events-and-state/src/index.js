import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    let button;
    if (this.state.isClicked) {
      button = <button>Thanks!</button>;
    } else {
      button = <button onClick={this.handleClick}>Click Me!</button>;
    }
    return (
      button
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
