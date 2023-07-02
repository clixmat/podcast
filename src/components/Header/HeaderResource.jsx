import React from 'react'

import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useLoader } from '../../hooks/useLoader'

import './HeaderResource.scss'

export function HeaderResource() {
    const { loaderPodcastActive, loaderEpisodesActive } = useLoader()
    return (
        <header>
            <div className="header-resource">
                <Link className="header-resource__title" to="/">
                    Podcaster
                </Link>
                {(loaderPodcastActive || loaderEpisodesActive) && (
                    <div>
                        <ClipLoader size="28px" color="#2071b3" />
                    </div>
                )}
            </div>
        </header>
    )
}
