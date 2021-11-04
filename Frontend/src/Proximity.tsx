import React from 'react';
import styled from 'styled-components';

const ProxStyleContainer = styled.div`
    display: flex;
    background-color: #3E4046;
    color: #FFEDE7;
    font-family: 'Space Mono', monospace;
    flex-grow: 1;
    border: 1px solid #FFEDE7;
    padding: 1rem;
    margin: .8rem;
`;

class Proximity extends React.Component<any, any> {
    state = {
        value: 0
    }
    
    handleOnChange = (e:any) => this.setState({ value: ((e.target as HTMLInputElement).value )})
    handleFormSubmit = (formSubmitEvent: { preventDefault: () => void; }) => {
        formSubmitEvent.preventDefault();
        console.log('Proximity set at: ', this.state.value);
      };
    
    render(): JSX.Element {
        return ( 
            <ProxStyleContainer>
                <form onSubmit={this.handleFormSubmit}>
                <input type="range" min={0} max={50} value={this.state.value} className="slider" onChange={this.handleOnChange} />
                <div className="value">{this.state.value}</div>
                <button className="submit">Submit</button>
                </form>
            </ProxStyleContainer>
        )
    }
}

export default Proximity;