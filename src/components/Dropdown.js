import React from 'react';

class Dropdown extends React.Component  {

    handleChoiceChange = () => {
        
            let choiceValue = 'Europe/Moscow'
            this.props.callback(choiceValue);
            console.log(choiceValue)
        
    }
    
    // const timeArray = [moment.tz.names()]
    // console.log(timeArray)

    render()    {
        this.handleChoiceChange()
    return (
        <>
        </>
    )

    }
}

export default Dropdown