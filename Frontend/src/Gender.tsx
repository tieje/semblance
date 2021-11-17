//feat-mvp: select out of the three top pronouns (he/she/they)(check)
//each is an array in order: he/him/his (not attached yet to backend)
//populated according to position in array? (not attached to backend)

//bonus mode: options to add your own pronouns, paid feature to sort 
//according to gender, (all non-standard being rolled into the "they" option, presented
//as "other" or something like that? 


//something like:
import React, { Component } from 'react';
import styled from 'styled-components';


class GenderSelect extends Component<any,any>{


  constructor(props:string){
    super(props);
    this.state = {
      selectedOption: ''
    };
    }
  handleOptionChange = (changeEvent: { target: { value: any; }; }) => {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}; 

GenderStyleContainer=styled.div`
  display: flex;
  background-color: #3E4046;
  color: #FFEDE7;
  font-family: 'Space Mono', monospace;
  flex-grow: 1;
  border: 1px solid #FFEDE7;
  padding: 1rem;
  margin: .8rem;
`
GenderInput=styled.input`
  cursor: pointer;
`

handleFormSubmit = (formSubmitEvent: { preventDefault: () => void; }) => {
  formSubmitEvent.preventDefault();
  console.log('Pronouns selected: ', this.state.selectedOption);
};

 render(): JSX.Element {
  return (
    <this.GenderStyleContainer>
      <form onSubmit={this.handleFormSubmit}>
        <p> Select pronouns:</p>
        <div className = "form-check">
          <label>
          <this.GenderInput
            type="radio" 
            name="gender-select"
            id="man" 
            value="he/him/his" 
            checked={this.state.selectedOption === "he/him/his"}
            onChange={this.handleOptionChange}
            className="form-check-input" 
            />
            he/him/his
          </label>
          </div>

          <div className = "form-check">
          <label>
          <this.GenderInput 
            type="radio" 
            name="gender-select"
            id="woman" 
            value="she/her/hers" 
            checked={this.state.selectedOption === "she/her/hers"}
            onChange={this.handleOptionChange}
            className="form-check-input"
            />
            she/her/hers
          </label>
          </div>
          <div className = "form-check">
          <label>
          <this.GenderInput 
            type="radio" 
            name="gender-select"
            id="other" 
            value="they/them/theirs" 
            checked={this.state.selectedOption === "they/them/theirs"}
            onChange={this.handleOptionChange} 
            className="form-check-input"
            />
            they/them/theirs
          </label>
          </div>
          <div className="form-group">
            <button type="submit">
              Submit
            </button>
          </div>
    </form>
    </this.GenderStyleContainer>
  );
  }

}

export default GenderSelect;




//to do: connect to backend 
