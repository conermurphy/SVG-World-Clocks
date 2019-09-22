import React from 'react';
import clockStyles from "./clockStyles.module.css"
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
        const {hour, minute, second} = this.state;

        let displayLocal;
        if (this.props.city != null)    {
            displayLocal = <p>The current time for <strong>{this.props.city}</strong> is:</p>;
        } else  {
            displayLocal = <p>Your local time is: </p>
        }; 

        return (
            <div className={clockStyles.container}>
                {displayLocal}
                <h3><strong>{ hour } : { minute } : { second }</strong></h3>
            </div>
        )
    }
}

export default Clock;