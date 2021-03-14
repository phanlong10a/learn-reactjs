import React from 'react';

class ResultCounter extends React.Component{
    render(){
        return(
            <>
                <h1>{this.props.count}</h1>
            </>
        )
    }
}
export default ResultCounter;