import React from 'react'

import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

import './PodcastEpisode.scss'

export function PodcastEpisode({ episode }) {
    const summary = DOMPurify.sanitize(episode.summary, { USE_PROFILES: { html: true } })
    return (
        <div className="podcast-episode">
            <div className="podcast-episode__content">
                <h2 className="podcast-episode__title">{episode.title}</h2>
                <div className="podcast-episode__summary">{parse(summary)}</div>
                <audio className="podcast-episode__player" controls src={episode.trackUrl}>
                    <a href={episode.trackUrl}>Download podcast</a>
                </audio>
            </div>
        </div>
    )
}
