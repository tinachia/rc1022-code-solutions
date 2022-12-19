import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.tagName === 'I') {
      this.setState({ isOpen: true });
    } else if (event.target.tagName === 'A' || event.target.className === 'modal column-two-thirds') {
      this.setState({ isOpen: false });
    }
  }

  render() {
    let modal;
    if (this.state.isOpen === true) {
      modal = 'drawer row';
    } else {
      modal = 'drawer row hidden';
    }
    return (
      <div className="container" onClick={this.handleClick}>
        <button onClick={this.handleClick}>
          <i className='fa-solid fa-bars'></i>
        </button>
        <div className='row'>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0489cee-fc9b-4fea-ae01-5878150d1c4c/deiopox-21f00f9e-4e8c-46e5-b4c0-c1dfb3cca8a2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwNDg5Y2VlLWZjOWItNGZlYS1hZTAxLTU4NzgxNTBkMWM0Y1wvZGVpb3BveC0yMWYwMGY5ZS00ZThjLTQ2ZTUtYjRjMC1jMWRmYjNjY2E4YTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PULML99j_xaMlay7qN9wG6g1EO1I4fVnKKNWa52e6zU" alt="avenger trio"></img>
        </div>
        <div className={modal}>
          <div className='menu'>
            <h2>Menu</h2>
            <h3>
              <a className='capamerica'>Captain America</a>
            </h3>
            <h3>
              <a className='ironman'>Iron Man</a>
            </h3>
            <h3>
              <a className='hulk'>Hulk</a>
            </h3>
          </div>
          <div className='modal column-two-thirds'>
          </div>
        </div>
      </div>
    );
  }
}
