import React from 'react'

import { useNavigate } from 'react-router-dom'

import './PodcastCard.scss'

export function PodcastCard({ podcast }) {
    const navigate = useNavigate()
    const goToPodcastDetailt = () => {
        navigate(`/podcast/${podcast.id}`)
    }

    return (
        <div className="podcast-card" onClick={goToPodcastDetailt}>
            <img className="podcast-card__image" src={podcast.image} alt={podcast.title} />
            <span className="podcast-card__title">{podcast.title}</span>
            <span className="podcast-card__author">{podcast.author}</span>
        </div>
    )
}
