import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

import './Layout.scss'

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="layout-container">
            <header>
                <section>
                    <h1 className="layout-container__title">
                        <Link to="/">Podcaster</Link>
                    </h1>
                </section>
            </header>
            <p>Sorry, this url was not found</p>
        </div>
    )
}
