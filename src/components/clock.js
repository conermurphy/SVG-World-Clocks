import React from 'react';
import clockStyles from "./styles/clockStyles.module.css"
import SVGCircle from "./SVGCircle"
const moment = require('moment-timezone');

class Clock extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            data: moment.tz.names(),
            date: new Date(),
            hour: undefined,
            minute: undefined,
            second: undefined,
            location: undefined,
        };
    } 

    componentDidMount()   {
        this.time = setInterval( 
            () => {
                    let location = String(this.state.data[this.props.number]).split("/").splice(-1)[0].replace('_', ' ');
                    let city = this.state.data[this.props.number];
                    let hour = moment().tz(city).hour(); 
                    let minute = moment().tz(city).minute(); 
                    let second = moment().tz(city).second(); 
                    this.setState({hour, minute, second, location});
            }, 1000 
        );
    }

    componentWillUnmount()  {
        clearInterval(this.time);
    }


    render()    {

            const { hour, minute, second, location } = this.state;
            
            return (
                
                <div className={clockStyles.container}>
                    <p><strong>{location}</strong></p>
                    <div className={clockStyles.SVGContainer}>
                        <h3><strong>{ hour } : { minute } : { second }</strong></h3>
                        <SVGCircle type={"hour"} hour={hour} minute={minute} second={second}/>
                        <SVGCircle type={"minute"} hour={hour} minute={minute} second={second}/>
                        <SVGCircle type={"second"} hour={hour} minute={minute} second={second}/>
                    </div> 
                </div>
            )
    }
}

export default Clock;

