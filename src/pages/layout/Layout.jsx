import React from 'react'

import { GenericError } from './GenericError'
import { HeaderResource } from '../../components/header/HeaderResource'
import { LoaderProvider } from '../../context/loading'
import { Outlet } from 'react-router-dom'

import './Layout.scss'

export function Layout() {
    return (
        <LoaderProvider>
            <div className="layout-container">
                <HeaderResource />
                <GenericError>
                    <Outlet />
                </GenericError>
            </div>
        </LoaderProvider>
    )
}
