import React from 'react';
import appStyles from './styles/appStyles.module.css';
import Header from './Header';
import Clock from "./clock";
import Dropdown from './Dropdown';
import ChoiceClock from './ChoiceClock';
import HomeClock from './HomeClock';
const moment = require('moment-timezone');

class App extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
        choice: '',
        children: []
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

  // clockGen = () => {
  //   for(let i = 0; i < 5; i++)  {
  //     console.log(i)
  //     // {<Clock key = {i} number = {this.randomNum()}/>}
      
  //   }
  // }

  // Look into a better way of doing this.
  addClock(){
    this.setState({
      children: [
        <Clock number = {this.randomNum()}/>,
        this.state.children,
      ]
    })
    console.log(this.state.children)
  }

  //How does this even work???
  removeClock(){
    this.state.children.splice(-1,1);
  }
  

  render() {
    return (
      <div className={appStyles.pageContainer}> 
        <Header/>
        <div id='home' className={appStyles.localClockContainer}>
            <HomeClock/>     
        </div>
        <main className={appStyles.mainContainer}>
          <div id='worldClocks' className={appStyles.worldClocks}>
            <div className={appStyles.preClocksContainers}>
                <Clock number = {this.randomNum()} />

                {/* {this.clockGen()} */}
                {this.state.children.map(child => child)}

            </div>
            <div className={appStyles.buttons}>
              <button onClick={() => this.addClock()}>Add a clock!</button>
              <button onClick={() => this.removeClock()}>Remove a clock!</button>
            </div>
          </div>
          <div id='choiceClock'className={appStyles.choiceSection}>
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