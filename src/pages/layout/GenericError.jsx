import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class GenericError extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    promiseRejectionHandler = (event) => {
        this.setState({
            error: event.reason
        })
    }

    componentDidCatch(error, info) {
        console.error('Uncaught error:', error, info)
    }

    componentDidMount() {
        window.addEventListener('unhandledrejection', this.promiseRejectionHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.promiseRejectionHandler)
    }

    resetError() {
        this.setState({ error: null })
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <h2>
                        Please return to the homepage by clicking{' '}
                        <Link onClick={this.resetError} to={'/'}>
                            here
                        </Link>
                    </h2>
                </>
            )
        }

        return this.props.children
    }
}
