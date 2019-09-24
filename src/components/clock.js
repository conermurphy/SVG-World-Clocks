import React from 'react';
import clockStyles from "./clockStyles.module.css"
import SVGCircle from "./SVGCircle"
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
        const { hour, minute, second } = this.state;
		const hourRadius = 565 - ((565/24) * hour);
		const minuteRadius = 503 - ((503/60) * minute);
		const secondRadius = 440 - ((440/60) * second);
		if(!second) {
			return null;
        }

        let displayLocal;
        if (this.props.city != null)    {
            displayLocal = <p><strong>{this.props.city}</strong></p>;
        } else  {
            displayLocal = <p>Your local time is: </p>
        }; 

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
    }
}

export default Clock;

