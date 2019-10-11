import React from "react"
import choiceClockStyles from './styles/choiceClockStyles.module.css';
import ChoiceSVGCircle from './ChoiceSVGCircle';
const moment = require('moment-timezone');

class ChoiceClock extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            date: new Date(),
            hour: undefined,
            minute: undefined,
            second: undefined,
            location: undefined
        }
    }

    componentDidMount() {
        this.time = setInterval(
            () => {
                let location = String(this.props.city).split("/").splice(-1)[0].replace('_', ' ');
                let city = this.props.city;
                let hour = moment().tz(city).hour();
                let minute = moment().tz(city).minute();
                let second = moment().tz(city).second();
                this.setState({hour, minute, second, location});
            }, 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    render() {
        const {hour, minute, second, location } = this.state;
        return (
            <div className={choiceClockStyles.container}>
                <header className={choiceClockStyles.header}>
                    <p>The time in: <strong>{location}</strong></p>
                    <h3><strong>{ hour } : { minute } : { second }</strong></h3>
                </header>
                
                <div className={choiceClockStyles.SVGContainer}>
                    <ChoiceSVGCircle type={"hour"} hour={hour} minute={minute} second={second}/>
                    <ChoiceSVGCircle type={"minute"} hour={hour} minute={minute} second={second}/>
                    <ChoiceSVGCircle type={"second"} hour={hour} minute={minute} second={second}/>
                </div>

            </div>
        )

    }
}

export default ChoiceClock