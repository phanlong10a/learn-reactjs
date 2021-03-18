import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid  #ccc;
    border-radius: 5px;
    padding: 0px 10px;
    margin: 0 10px;
    margin-bottom: 10px;
`;
class InputTodos extends React.Component {
    render() {
        return (
            <>
            <Input 
            value = {this.props.val}
            onChange={this.props.change}
            placeholder = {this.props.children}
            ></Input>
            </>
        );
    }
}
export default InputTodos;