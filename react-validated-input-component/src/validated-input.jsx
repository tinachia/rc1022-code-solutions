import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let errorMsg;
    let icon;
    const specialChar = /[!@#$%^&*()]/;
    if (this.state.password === '') {
      errorMsg = 'A password is required';
      icon = 'fa-x';
    } else if (this.state.password.length < 8) {
      errorMsg = 'Your password is too short';
      icon = 'fa-x';
    } else if (!specialChar.test(this.state.password) || !(/[A-Z]/.test(this.state.password)) || !(/\d/.test(this.state.password))) {
      errorMsg = 'Your password needs a digit, capital letter, and a special character (!, @, #, $, %, ^, &, *, (, or ))';
      icon = 'fa-x';
    } else {
      icon = 'fa-check';
    }
    return (
      <div>
        <form>
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePassword}></input>
          <i className={`fas ${icon}`}></i>
          <p>{errorMsg}</p>
        </form>
      </div>
    );
  }
}
