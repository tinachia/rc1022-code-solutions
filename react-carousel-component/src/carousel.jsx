import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImg: 1 };
    this.carousel = this.carousel.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleArrow = this.handleArrow.bind(this);
  }

  componentDidMount() {
    this.carousel();
  }

  carousel() {
    this.intervalId = setInterval(() => {
      if (this.state.currentImg === 5) {
        this.setState({ currentImg: 1 });
      } else {
        this.setState({ currentImg: this.state.currentImg + 1 });
      }
    }, 3000);
  }

  handleClick(event) {
    if (event.target.className.includes('fa-circle')) {
      this.setState({ currentImg: Number(event.target.dataset.id) });
    }
    clearInterval(this.intervalId);
    this.carousel();
  }

  handleArrow(event) {
    if (event.target.className.includes('fa-chevron-right')) {
      if (this.state.currentImg !== 5) {
        this.setState({ currentImg: this.state.currentImg + 1 });
      } else {
        this.setState({ currentImg: 1 });
      }
    } else if (event.target.className.includes('fa-chevron-left')) {
      if (this.state.currentImg !== 1) {
        this.setState({ currentImg: this.state.currentImg - 1 });
      } else {
        this.setState({ currentImg: 5 });
      }
    }
    clearInterval(this.intervalId);
    this.carousel();
  }

  render() {
    const imgSrc = this.props.imgSrc;
    const imageList = imgSrc.map(img => {
      const toggle = this.state.currentImg === img.id ? '' : 'hidden';
      return <img key={img.id} className={toggle} src={img.img}></img>;
    });
    const icons = imgSrc.map(img => {
      const clicked = this.state.currentImg === img.id ? 'fa-solid fa-circle' : 'fa-regular fa-circle';
      return <i key={img.id} data-id={img.id} className={clicked}></i>;
    });
    return (
      <>
        <div className="row container" onClick={this.handleArrow}>
          <div className='column-full' >
            <i className='fa-solid fa-chevron-left'></i>
            {imageList}
            <i className='fa-solid fa-chevron-right'></i>
          </div>
        </div>
        <div className="row" onClick={this.handleClick}>
          <div className="column-full circle">
            {icons}
          </div>
        </div>
      </>
    );
  }
}
