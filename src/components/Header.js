import React from 'react';
import headerStyles from './styles/headerStyles.module.css';

class Header extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            slide: '-25vh',
            lastScrollY: 0
        };
    }

// Base code for retractable navbar from @ https://stackoverflow.com/questions/47441220/react-slide-fixed-navbar-up-on-scroll-down-and-slide-down-on-scroll-up

  componentDidMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-25vh' });
    } else if (window.pageYOffset === 0 ){
      this.setState({ slide: '-25vh' });
    } else  {
      this.setState({ slide: '0' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  // End of code for navbar

  render(){
      return(
        <header className={headerStyles.header} style={{transform: `translate(0, ${this.state.slide})`, transition: `180ms linear`}}>
            <nav>
                <a href="#home">Home</a>
                <a href="#worldClocks">Times around the World</a>
                <a href="#choiceClock">Choose a zone</a>
            </nav>
        </header>
      )
  }

}

export default Header;
