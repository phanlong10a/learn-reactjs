import React from 'react';



class  ChilderLifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            c: 0
        }
        console.log('constructor clcc mounting da chay')
    }
    static getDerivedStateFromProps(props, state){
        console.log(state, props);
        console.log('.... static getDerivedStateFromProps props of CDLCC st')
        return null;
    }


    render() {
        console.log('render CDLCC da chay')
      return (
          
        <div>
          <h3> gia tri nhan tu props{this.props.count}</h3>
          <h2> gia tri state cua Component : {this.state.c}</h2>
        </div>
      )
    };

    
}
export default ChilderLifeCycle;