import React from 'react';
import ButtonCounter from '../buttonCounter'
import ResultCounter from '../resultCounter'
import './counter.css'
class AppCounter extends React.Component{
    constructor(props){
        super(props);
        //tao ra 1 state
        this.state = {
            count : 0
        }
        // this.incrementNumber = this.incrementNumber.bind(this);
        // this.decrementNumber = this.decrementNumber.bind(this);
    }


    incrementNumber = () =>{
        // cap nhat thay doi state tang len
        this.setState({
            count: this.state.count + 1,
        })
    }
    decrementNumber = () => {
        // cap nhat thay doi state giam xuong
        this.setState((state, props) => {
            console.log(state);
            console.log(props);
            return{ count: state.count - 1 }
        })
    }
    render(){
        return (
            <>
                <section className="container">
                    <ResultCounter count={this.state.count}/>
                    <ButtonCounter 
                    type="button"
                    click={this.incrementNumber}
                    > + </ButtonCounter>
                    <ButtonCounter 
                    type="button"
                    click={this.decrementNumber}
                    > - </ButtonCounter>
                </section>
            </>
        )
    }

}
export default AppCounter;