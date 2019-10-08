import React from 'react';
import appStyles from './styles/appStyles.module.css';
import Clock from "./clock";
import Dropdown from './Dropdown';
import ChoiceClock from './ChoiceClock';
import HomeClock from './HomeClock';
const moment = require('moment-timezone');

class App extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
        choice: ''
    };
  }

  handleChoice = (choiceValue) => {
    if (this.state.choice !== choiceValue) {  
    this.setState({choice: choiceValue});
    } else  {
      return;
    }
  }

  randomNum = () => {
    let max = moment.tz.names().length;
    let random = (Math.floor(Math.random() * (max + 1)));
    return random;
  }

  render() {
    return (
      <div className={appStyles.pageContainer}> 
        <div className={appStyles.localClockContainer}>
            <HomeClock/>     
        </div>
        <main className={appStyles.mainContainer}>
          <div id='worldClocks' className={appStyles.worldClocks}>
            <h2>Times from around the world.</h2>
            <div className={appStyles.preClocksContainers}>
                <Clock number = {this.randomNum()} />
                <Clock number = {this.randomNum()} />
                <Clock number = {this.randomNum()} />
                <Clock number = {this.randomNum()} />
                <Clock number = {this.randomNum()}/>
                <Clock number = {this.randomNum()}/>
                <Clock number = {this.randomNum()}/>
                <Clock number = {this.randomNum()}/>
            </div>
          </div>
          <div className={appStyles.choiceSection}>
            <h2>Find a timezone.</h2>
            <Dropdown callback={this.handleChoice}/>
            <ChoiceClock city={this.state.choice} />
          </div>
        </main>
        <footer className={appStyles.footer}>
            <h4>A small project created by <a href="https://conermurphy.com">Coner Murphy</a>. Check out the code on <a href="https://github.com/conermurphy/SVG-World-Clocks">Github</a></h4>
        </footer>
      </div>
      ); 
    }
  }

export default App;