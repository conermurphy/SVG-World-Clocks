import React from 'react';
import appStyles from './appStyles.module.css';
import Clock from "./clock";
import Dropdown from './Dropdown';
import ChoiceClock from './ChoiceClock';

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

  render() {
    return (
      <div className={appStyles.pageContainer}> 
      <div className={appStyles.localClockContainer}>
            <Clock city={null} />     
        </div>
        <main className={appStyles.mainContainer}>
          <div className={appStyles.worldClocks}>
            <h2>Times from around the world.</h2>
            <div className={appStyles.preClocksContainers}>
              <div className={appStyles.preClockContainerTop}>
                <Clock city={'Europe/London'} />
                <Clock city={'America/Los_Angeles'} />
                <Clock city={'Asia/Tokyo'} />
                <Clock city={'Australia/Sydney'} />
              </div>
              <div className={appStyles.preClockContainerBottom}>
                <Clock city={'Pacific/Tahiti'}/>
                <Clock city={'Pacific/Auckland'}/>
                <Clock city={'America/Sao_Paulo'}/>
                <Clock city={'Europe/Moscow'}/>
              </div>
            </div>
          </div>
          <div className={appStyles.choiceSection}>
            <h2>Find a timezone.</h2>
            <Dropdown callback={this.handleChoice}/>
            <ChoiceClock city={this.state.choice} />
          </div>
        </main>
        <footer className={appStyles.footer}>

        </footer>
      </div>
      ); 
    }
  }

export default App;