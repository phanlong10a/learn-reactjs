import React from 'react';



class ButtonCounter extends React.Component {
    render(){
        return (
            <>
                <button 
                type={this.props.type}
                onClick={() => this.props.click()}
                >
                    {this.props.children}
                </button>
            </>
        )
    }
}
export default ButtonCounter;
