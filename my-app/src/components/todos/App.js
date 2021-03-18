import React, { Component } from 'react';
import ButtonTodo from '../todos/btn';
import InputTodos from './input';
import ListTask from '../todos/list'
import styled from 'styled-components'


const DivContainer = styled.div`
    max-width:350px;
    min-height:100px;
    border:1px solid #000;
    margin :0 auto;
    padding:10px 10px;
    
`

class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[],
            id:1,
            work:""
        }
    }
    //ham luu state work tu hanh dong nhap du lieu vao o input
    changeWork = (event) =>  {
        let workChage = event.target.value;
            this.setState({
                work:workChage
            })
        
    }
    addTodo = ()=>{
        if (this.state.work !=="") {
       this.setState({
           id: this.state.id +1,
           todos: [...this.state.todos, 
            {
            id_work:this.state.id,
            name_work:this.state.work,
            done:false}
        ],
           work:""
       })
        }
       
    }

    removeTodo = (id) => {
        let newWork = this.state.todos.filter(item => item.id_work !== id);
        this.setState({
            ...this.state,
            todos: newWork
        })

    }

    finishTodo = (id) =>{
        let newTodos = this.state.todos.map(item => item.id_work === id ? {...item, done: !item.done} : item );
        this.setState({
            ...this.state,
            todos: newTodos
        })
    }

    render() {
        console.log(this.state.todos);
        console.log(this.state.todos.done)
      return (
        <>
            <DivContainer>
                <InputTodos val={this.state.work} change={this.changeWork} />        
                <ButtonTodo click={this.addTodo}> Add </ButtonTodo>
                <ListTask 
                listTodo  = {this.state.todos} 
                del = {this.removeTodo}
                finish = {this.finishTodo}
                />
            </DivContainer> 
        </>
      )
    };
}
export default TodoApp;