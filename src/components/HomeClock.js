import React from "react"
import homeClockStyles from './styles/homeClockStyles.module.css';
import HomeSVGCircle from './homeSVGCircle';
const moment = require('moment-timezone');

class HomeClock extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            date: new Date(),
            hour: undefined,
            minute: undefined,
            second: undefined,
        }
    }

    componentDidMount() {
        this.time = setInterval(
            () => {
                let location = moment.tz.guess();
                let hour = moment().tz(location).hour();
                let minute = moment().tz(location).minute();
                let second = moment().tz(location).second();
                this.setState({hour, minute, second});
            }, 1000
        );
    }

    componentWillUnmount()  {
        clearInterval(this.time);
    }

    render()    {
        const {hour, minute, second } = this.state;
        return (
            <div className={homeClockStyles.container}>
                <header className={homeClockStyles.pageHeader}>
                    <h1>World Clocks</h1>
                    <h3 style={{fontSize:`2rem`}}><strong>{ hour } : { minute } : { second }</strong></h3>
                </header>
                
                <div className={homeClockStyles.homeSVGContainer}>
                    <HomeSVGCircle type={"hour"} hour={hour} minute={minute} second={second}/>
                    <HomeSVGCircle type={"minute"} hour={hour} minute={minute} second={second}/>
                    <HomeSVGCircle type={"second"} hour={hour} minute={minute} second={second}/>
                </div>

            </div>
        )
    }

}

export default HomeClock