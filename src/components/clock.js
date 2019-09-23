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
		const hourRadius = mapNumber(hour, 24, 0, 0, 360);
		const minuteRadius = mapNumber(minute, 60, 0, 0, 360);
		const secondRadius = mapNumber(second, 60, 0, 0, 360);

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

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return 360 - (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

export default Clock;