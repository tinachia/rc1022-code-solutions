import React from 'react';
import ReactDom from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={this.state.username} onChange={this.handleUsernameChange}></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <button>Sign Up</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);

root.render(<RegistrationForm />);
