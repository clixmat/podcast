import React from 'react'

import { useParams } from 'react-router-dom'
import { useLoader } from '../../hooks/useLoader'
import { usePodcastEpisode } from '../../hooks/usePodcastEpisode'
import { usePodcast } from '../../hooks/usePodcast'

import { PodcastEpisodeList } from './components/content/PodcastEpisodeList'
import { PodcastDetailCard } from './components/PostcastDetailCard'
import { PodcastEpisode } from './components/episodes/PostcastEpisode'

import './PodcastDetail.scss'

export function PodcastDetail({ repository }) {
    const { podcastId, episodeId } = useParams()
    const { repositoryData: podcastData } = usePodcast({ repository, podcastId })
    const { repositoryData: episodes } = usePodcastEpisode({ repository, podcastId, episodeId })
    const { loaderPodcastActive, loaderEpisodesActive } = useLoader()
    const podcast = podcastData[0]

    return (
        <>
            {!loaderPodcastActive && !loaderEpisodesActive && podcast && (
                <div className="podcast-detail">
                    <PodcastDetailCard podcast={podcast} />
                    {episodeId && episodes.length === 1 ? (
                        <PodcastEpisode episode={episodes[0]} />
                    ) : (
                        <PodcastEpisodeList episodes={episodes} />
                    )}
                </div>
            )}
        </>
    )
}
