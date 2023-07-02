import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './pages/layout/Layout'
import { PodcastDetailMain } from './pages/podcastDetail/PodcastDetailMain'
import { PodcastListMain } from './pages/postcastList/PodcastListMain'

import ErrorPage from './pages/layout/ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: PodcastListMain.create() },
            { path: '/podcast/:podcastId/', element: PodcastDetailMain.create() },
            { path: '/podcast/:podcastId/episode/:episodeId', element: PodcastDetailMain.create() }
        ]
    }
])

export function Router() {
    return <RouterProvider router={router} />
}
