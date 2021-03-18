import React from 'react';
import styled from 'styled-components';
import '../todos/todo.css'
import PropTypes from 'prop-types';


const Ul = styled.ul`
    padding :0;
    margin:0;
    position: relative;
`
const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: aqua;
    border-radius: 5px; 
    color: white;
`
const Li = styled.li`
    list-style:none;
    width: 200px;
    height: 30px;
    border: 1px solid  #ccc;
    border-radius: 5px;
    padding: 0px 10px;
    margin: 0 10px;
    display:inline-block;
    background-color: #ccc;
    margin-bottom:1px
`

class ListTask extends React.Component {


    
    render() {
      return (
        <>
            <Ul>
              {this.props.listTodo.map((item, index) => (
                <Li key={index}>
                  <input 
                  type='checkbox'
                  onClick ={()=> this.props.finish(item.id_work)}
                  ></input>
                  <span className = {`nameWork ${item.done ? 'del' : ''} `}>{item.name_work}</span>
                  <Button onClick={()=> this.props.del(item.id_work)} style={{marginRight:'5px'}}>Xoá</Button>
                </Li>
                
              ))}
            </Ul> 
        </>
      )
    };
}
ListTask.propTypes = {
  del : PropTypes.func.isRequired,
  finish : PropTypes.func.isRequired,


}
export default ListTask;