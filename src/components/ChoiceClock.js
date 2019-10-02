import React from "react"
import choiceClockStyles from './choiceClockStyles.module.css';
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
        }
    }

    componentDidMount() {
        this.time = setInterval(
            () => {
                let location = String(this.props.city);
                let hour = moment().tz(location).hour();
                let minute = moment().tz(location).minute();
                let second = moment().tz(location).second();
                this.setState({hour, minute, second});
            }, 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    render() {
        const {hour, minute, second } = this.state;
        return (
            <div className={choiceClockStyles.container}>
                <header className={choiceClockStyles.header}>
                    <h3>The time in: {this.props.city}</h3>
                    <h3 style={{fontSize:`2rem`}}><strong>{ hour } : { minute } : { second }</strong></h3>
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