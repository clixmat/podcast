import React from 'react'
import { Link } from 'react-router-dom'

import './PodcastDetailCard.scss'

export function PodcastDetailCard({ podcast }) {
    return (
        <div className="podcast-detail-card">
            <Link to={`/podcast/${podcast.id}`}>
                <img className="podcast-detail-card__image" src={podcast.image} alt={podcast.title} />
            </Link>
            <div className="podcast-detail-card__header">
                <p className="podcast-detail-card__title">
                    <Link className="podcast-detail-card__path" to={`/podcast/${podcast.id}`}>
                        {podcast.title}
                    </Link>
                </p>
                <p className="podcast-detail-card__author">
                    by{' '}
                    <Link className="podcast-detail-card__path" to={`/podcast/${podcast.id}`}>
                        {podcast.author}
                    </Link>
                </p>
            </div>
            <div className="podcast-detail-card__summary">
                <p className="podcast-detail-card__title">Description:</p>
                <p className="podcast-detail-card__description">{podcast.summary}</p>
            </div>
        </div>
    )
}
