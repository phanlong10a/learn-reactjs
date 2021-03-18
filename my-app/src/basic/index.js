import React from 'react';
// import PropTypes from 'prop-types';
import HeaderComponent from '../components/basic/header'

class AppBasic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'aqua',
            count: 0
        }
    }

    changeColor = (event) =>{
        console.log(event)
        let nameBtn = event.target.name;
        if(nameBtn !== ''){
            this.setState({color:nameBtn})
        }
    }


    changeCount = () => {
        // this.setState({count: this.state.count + 1})
        this.setState((state) => ({count : state.count + 1}))

    }

    viewCount = () =>{
        this.changeCount();
        this.changeCount();
    }


    render(){
        return (
            <>
                <HeaderComponent> </HeaderComponent>
                <h3  style = {{color: this.state.color}}> this is color .....~~~</h3>
                <h3>{this.state.count}</h3>
                <button 
                
                onClick={(e) => this.changeColor(e)}

                name='red' 
                
                type='button'
                >red</button>
                <button 

                onClick={(e) => this.changeColor(e)}
                
                name='aqua' type='button'>aqua</button>
                <button onClick={(e) => this.viewCount(e)} type='button'>+</button>
                <button onClick={(e) => this.changeCount(e)} type='button'>-</button>

            </>
        )
    }
}
export default AppBasic;