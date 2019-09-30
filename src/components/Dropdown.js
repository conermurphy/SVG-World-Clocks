import React from 'react';
const moment = require('moment-timezone');

class Dropdown extends React.Component  {

    constructor(props)  {
        super(props)
        this.state = {
            data: moment.tz.names(),
        }
    }

    handleChoiceChange = () => {
        let choiceValue = 'Europe/Moscow'
        this.props.callback(choiceValue);
        console.log(choiceValue)
    }
    

    render()    {
        this.handleChoiceChange()
        console.log(moment.tz.names())

    return (
        <>

        </>
    )

    }
}

export default Dropdown