import React from 'react';
import dropdownStyles from "./dropdownStyles.module.css"
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
        console.log("userInput is =",this.state.userInput);

        let choiceValue;
        
        if (this.state.data.includes(this.state.userInput))   {
            choiceValue = this.state.userInput
        } else  {
            choiceValue = "Waiting for timezone";
            console.log("choiceValue is = ", choiceValue)
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
            userInput: e.currentTarget.innerText,
        });
    };

    // Event fired when the user presses a key down
    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
        this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
        });
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
        if (activeSuggestion === 0) {
            return;
        }

        this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
        if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
        }

        this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render()    {
        this.handleChoiceChange()
        console.log(this.state.data)
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
        <>
            <input className={dropdownStyles.input} type="text" onChange={onChange} onKeyDown={onKeyDown} value={userInput}/>
            {suggestionsListComponent}
        </>
    )

    }
}

export default Dropdown