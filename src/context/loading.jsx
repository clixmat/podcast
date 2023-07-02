import React, { createContext, useState } from 'react'

export const Loading = createContext()

export function LoaderProvider({ children }) {
    const [loaderPodcastActive, setLoaderPodcastActive] = useState(false)
    const [loaderEpisodesActive, setLoaderEpisodesActive] = useState(false)

    return (
        <Loading.Provider value={{ loaderPodcastActive, loaderEpisodesActive, setLoaderPodcastActive, setLoaderEpisodesActive }}>
            {children}
        </Loading.Provider>
    )
}
