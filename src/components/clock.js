import React from 'react';
import clockStyles from "./clockStyles.module.css"
import SVGCircle from "./SVGCircle"
import HomeSVGCircle from "./homeSVGCircle"
const moment = require('moment-timezone');


class Clock extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            date: new Date(),
            hour: undefined,
            minute: undefined,
            second: undefined,
        };
    }

    componentDidMount()   {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.time = setInterval( 
            () => {
                if (this.props.city != null) {
                    let location = String(this.props.city);
                    let hour = moment().tz(location).hour(); 
                    let minute = moment().tz(location).minute(); 
                    let second = moment().tz(location).second(); 
                    this.setState({hour, minute, second});
                } else {
                    let location = moment.tz.guess();
                    let hour = moment().tz(location).hour(); 
                    let minute = moment().tz(location).minute(); 
                    let second = moment().tz(location).second(); 
                    this.setState({hour, minute, second});
                }
            }, 1000 
        );
    }

    componentWillUnmount()  {
        clearInterval(this.timerID);
        clearInterval(this.time);
    }

    tick()  {
        this.setState({
            date: new Date()
        });
    }

    render()    {

         let displayLocal = <p><strong>{this.props.city}</strong></p>;

        if (this.props.city != null)  {
            const { hour, minute, second } = this.state;
            const hourRadius = 565 - ((565/24) * hour);
            const minuteRadius = 503 - ((503/60) * minute);
            const secondRadius = 440 - ((440/60) * second);
            if(!second) {
                return null;
            }
            return (
                
                <div className={clockStyles.container}>
                    {displayLocal}
                    <div className={clockStyles.SVGContainer}>
                        <h3><strong>{ hour } : { minute } : { second }</strong></h3>
                        <SVGCircle type={"hour"} radius={hourRadius}/>
                        <SVGCircle type={"minute"} radius={minuteRadius}/>
                        <SVGCircle type={"second"} radius={secondRadius}/>
                    </div> 
                </div>
            )
        } else  {
            const { hour, minute, second } = this.state;
            if(!second) {
                return null;
            }
            return (
                <div className={clockStyles.homeContainer}>
                    <header className={clockStyles.pageHeader}>
                            <h1>World Clocks</h1>
                            <h3 style={{fontSize:`3rem`}}><strong>{ hour } : { minute } : { second }</strong></h3>
                        </header>
                    <div className={clockStyles.homeSVGContainer}>                   
                        <HomeSVGCircle type={"hour"} hour={hour} minute={minute} second={second}/>
                        <HomeSVGCircle type={"minute"} hour={hour} minute={minute} second={second}/>
                        <HomeSVGCircle type={"second"} hour={hour} minute={minute} second={second}/>
                    </div> 
                </div>
            )
        }
        
    }
}

export default Clock;

