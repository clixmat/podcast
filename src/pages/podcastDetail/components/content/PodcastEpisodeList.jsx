import React from 'react'
import { Link } from 'react-router-dom'
import { useLoader } from '../../../../hooks/useLoader'

import './PodcastEpisodeList.scss'

export function PodcastEpisodeList({ episodes }) {
    const { loaderEpisodesActive } = useLoader()
    return (
        <>
            {!loaderEpisodesActive && (
                <div className="podcast-detail-episodes">
                    <div className="podcast-detail-episodes__header">
                        <span>
                            Episodes: <span className="podcastDetailEpisodesCounter">{episodes.length}</span>
                        </span>
                    </div>
                    <div className="podcast-detail-episodes__list">
                        {episodes.length === 0 ? (
                            <p>No episodes available at this moment. Please come back later...</p>
                        ) : (
                            <table className="podcast-detail-episodes__data-table" cellSpacing="0" cellPadding="0">
                                <thead>
                                    <tr>
                                        <th className="podcast-detail-episodes__label">Title</th>
                                        <th className="podcast-detail-episodes__label">Date</th>
                                        <th className="podcast-detail-episodes__label">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {episodes.map((episode) => (
                                        <tr className="podcast-detail-episodes__item" key={episode.id}>
                                            <td className="podcast-detail-episodes__item--data">
                                                <Link
                                                    className="podcast-detail-episodes__item--link"
                                                    to={`/podcast/${episode.podcastId}/episode/${episode.id}`}
                                                >
                                                    {episode.title}
                                                </Link>
                                            </td>
                                            <td className="podcast-detail-episodes__item--data">{episode.releaseDate}</td>
                                            <td className="podcast-detail-episodes__item--data">{episode.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
