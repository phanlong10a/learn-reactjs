import React from 'react';
import MyContext from './myContext'
import {GetDataVirusCorona} from '../sevices/virus'
class CoronaProvider extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            virus : []
        }
    }
    async componentDidMount()
    {
        await this.setState({
            loading: true
        });
        const data = await GetDataVirusCorona();
        await this.setState({
            loading: false,
            virus : data
        })
    }
    render()
    {
        return (
            <>
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
            </>
        )
    }
}
export default CoronaProvider;