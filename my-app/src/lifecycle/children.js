import React from 'react';



class  ChilderLifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            c: 4
        }
        console.log('constructor clcc mounting da chay')
    }
    static getDerivedStateFromProps(props, state){
        console.log(state, props);
        console.log('.... static getDerivedStateFromProps props of CDLCC st')
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log(nextState, nextProps);
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)    {
      console.log('getSnapshotBeforeUpdate',prevProps, prevState);
      return 10;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
      console.log(snapshot);
      document.getElementById('text').style.color = 'aqua';
    }

    incrementCount = () => {
      this.setState({
        c: this.state.c + 1,
      })
    }

    componentWillUnmount(){
      console.log('cpn vua bi xoa')
    }


    render() {
        console.log('render CDLCC da chay')
      return (
          
        <div>
          <h3> gia tri nhan tu props{this.props.count}</h3>
          <h2 id='text'> gia tri state cua Component : {this.state.c}</h2>
          <button type='button' onClick={()=>this.incrementCount()}> +1 </button>
        </div>
      )
    };

    
}
export default ChilderLifeCycle;