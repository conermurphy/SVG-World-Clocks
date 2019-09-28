import React from 'react';
import appStyles from './appStyles.module.css';
import Clock from "./clock";

const App = () => {
  return (
    <div className={appStyles.pageContainer}> 
    <div className={appStyles.localClockContainer}>
          <Clock city={null}/>     
      </div>
      <main className={appStyles.mainContainer}>
        <div className={appStyles.worldClocks}>
          <h2>Times from around the world.</h2>
          <div className={appStyles.preClocksContainers}>
            <Clock city={'Europe/London'}/>
            <Clock city={'America/New_York'}/>
            <Clock city={'America/Los_Angeles'}/>
            <Clock city={'Asia/Tokyo'}/>
            <Clock city={'Australia/Sydney'}/>
            <Clock city={'Pacific/Tahiti'}/>
            <Clock city={'Europe/Paris'}/>
            <Clock city={'Pacific/Auckland'}/>
            <Clock city={'America/Sao_Paulo'}/>
            <Clock city={'Europe/Moscow'}/>
          </div>
        </div>
        <div className={appStyles.choiceSection}>

        </div>
      </main>
      <footer className={appStyles.footer}>

      </footer>
    </div>
  );
}

export default App;