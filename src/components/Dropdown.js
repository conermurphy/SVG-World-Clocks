import React from 'react';
import dropdownStyles from "./styles/dropdownStyles.module.css"
const moment = require('moment-timezone');

class Dropdown extends React.Component  {

    // Definining state
    constructor(props)  {
        super(props)
        this.state = {
            data: moment.tz.names(),
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: "",
        }
    }

    // Callback function to pass to App component
    handleChoiceChange = () => {
        // console.log("userInput is =",this.state.userInput);

        let choiceValue;
        
        if (this.state.data.includes(this.state.userInput))   {
            choiceValue = this.state.userInput
        } else  {
            choiceValue = moment.tz.guess();
            // console.log("choiceValue is = ", choiceValue)
        }
        this.props.callback(choiceValue);
        
    }

    // USING FOLLOWING TUTORIAL FOR THE AUTOCOMPLETE DROPDOWN MENU TO HELP ME LEARN HOW TO MAKE ONE.
    // https://alligator.io/react/react-autocomplete/


    // Event fired when the input value is changed
    onChange = e => {
        const userInput = e.currentTarget.value;
        
         // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = this.state.data.filter(
        suggestion => 
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
  
        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
      });
    };

    // Event fired when the user clicks on a suggestion
    onClick = e => {
    // Update the user input and reset the rest of the state
          this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    render()    {
        this.handleChoiceChange()
        // console.log(this.state.data)
        const {onChange, onClick, onKeyDown, state: {activeSuggestion, filteredSuggestions, showSuggestions, userInput}} = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
              suggestionsListComponent = (
                <ul className={dropdownStyles.suggestions}>
                  {filteredSuggestions.map((suggestion, index) => {
                    let className;
      
                    // Flag the active suggestion with a class
                    if (index === activeSuggestion) {
                      className = "suggestionActive";
                    }
      
                    return (
                      <li
                        className={className}
                        key={suggestion}
                        onClick={onClick}
                      >
                        {suggestion}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionsListComponent = (
                <div className={dropdownStyles.noSuggestions}>
                  <em>No suggestions, you're on your own!</em>
                </div>
              );
            }
          }

    return (
        <div className={dropdownStyles.container}>
            <input className={dropdownStyles.input} type="text" onChange={onChange} onKeyDown={onKeyDown} value={userInput} placeholder="Search for a location..."/>
            {suggestionsListComponent}
        </div>
    )

    }
}

export default Dropdown