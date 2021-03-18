import React, { PureComponent } from 'react';
import ChildrenLifeCycle from './children';
class AppLifeCycle extends React.Component{
    ///// mounting
    constructor(props){
        super(props);
        //khai bao state
        this.state = {
            count : 0
        }

        // chay dau tien va duy nhat 1 lan trong mounting

        console.log('constructor da chay')
    }
    static getDerivedStateFromProps(props, state){
        console.log(state, props);
        console.log('.... static getDerivedStateFromProps props, st')
        return null;
    }

    componentDidMount(){
        // chay duy nhat 1 lan mounting
        console.log('render mounting da chay')
    }

    render() {
      return (
        <>
          <h1> This is app AppLifeCycle </h1> 
          <ChildrenLifeCycle></ChildrenLifeCycle>
        </>
      )
    };
}
export default AppLifeCycle;