import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h4 className="mb-5">404 Page Not found</h4>
                <Link to="/" className="btn btn-primary">Back Home</Link>
            </div>
        )
    }
}
