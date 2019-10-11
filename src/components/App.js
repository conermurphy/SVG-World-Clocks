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
        children: [this.randomNum(),]
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

  onAddClick(){
    let children = this.state.children;
    this.setState({children: children.concat(this.randomNum())});
    console.log("Adding 1 there are", children, "children");
  }

  onRemoveClick(){
    let childrenClocks = [...this.state.children];
    childrenClocks.splice(-1, 1)
    this.setState({children: childrenClocks})
    console.log("Removing 1 there are", this.state.children, "children");
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

                {this.state.children.map(item => (
                  <Clock key={item.length} number = {item}/>
                ))}
                
            </div>
            <div className={appStyles.buttons}>
              <button onClick={() => this.onAddClick()}>Add a clock!</button>
              <button onClick={() => this.onRemoveClick()}>Remove a clock!</button>
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