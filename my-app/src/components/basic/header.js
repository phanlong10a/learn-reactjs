import React from 'react';

class HeaderComponent extends React.PureComponent{
    render(){
        console.log(`HeaderComponent da dc render`);
        return(
            <>
                <h1> it is Header</h1>
            </>
        )
    }
}
export default HeaderComponent;