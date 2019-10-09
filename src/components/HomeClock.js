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
                    {/* Base code used for mouse scroll animation @ https://codepen.io/MichaelVanDenBerg/pen/POaPNe */}
                    
                        <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule: `evenodd`, clipRule: `evenodd`, strokeLinecap: `round`, strokeLineJoin: `round`, strokeMiterlimit: `1.5`, position: `absolute`, top: `12.5vh`, zIndex: `2`}}>
                            <a href="/#worldClocks">
                                <path className={homeClockStyles.wheel} d="M123.359,79.775l0,72.843" style={{fill: `none`, stroke:`#000`, strokeWidth: `20px`, zIndex: `inherit`}}/>
                                <path className={homeClockStyles.mouse} d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{fill: `transparent`, stroke:`#000`, strokeWidth: `20px`, zIndex: `inherit`}}/>
                            </a>
                        </svg>
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