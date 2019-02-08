import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import store from '../store'
import Candy from './Candy'

class CandyList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        console.log('HELLOOOO', this.props)
        return (
            <div >
                <h2>These are the candies in the bag</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Image</th>
                        </tr>
                        <Candy candy={this.props} />
                    </tbody>
                </table>
                {/* {this.state.candies.map(candy => {
                    return (<Candy key={candy.id} candy={candy} />)
                })} */}
            </div>
        )
    }
}

export default CandyList
