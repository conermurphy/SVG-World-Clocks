import React from 'react';
import appStyles from './appStyles.module.css';
import Clock from "./clock";

const App = () => {
  return (
    <div className={appStyles.pageContainer}> 
      <header className={appStyles.pageHeader}>
        <h1>World Clocks.</h1>
        <p>Some generic description about this wonderful page.</p>
      </header>
      <main>
        <h2>Times from around the world.</h2>
        <div className={appStyles.preClocksContainers}>
          <Clock city={'Europe/London'}/>
          <Clock city={'America/New_York'}/>
          <Clock city={'America/Los_Angeles'}/>
          <Clock city={'Asia/Tokyo'}/>
          <Clock city={'Australia/Sydney'}/>
        </div>
        <h2>Your local time is:</h2>
        <div className={appStyles.localClockContainer}>
          <Clock city={null}/>     
        </div>
      </main>

    </div>
  );
}

export default App;
