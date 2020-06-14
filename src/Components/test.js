import React, { Component } from 'react'

export default class test extends Component {
    componentDidMount(){
        console.log("componentDidMount 123.......");
    }

    componentWillUpdate(){
        console.log("componentWillUpdate 123.......");
    }

    render() {
        return (
            <div>
                <h3>Test Component</h3>
            </div>
        )
    }
}
