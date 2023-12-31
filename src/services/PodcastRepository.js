import { parseTimeToHumanReadable } from '../utils/DateTime'
import { PODCASTS_SERVICE, getPodcasts } from './constants'

export class PodcastRepository {
    getTopPodcasts = async () => {
        return fetch(PODCASTS_SERVICE)
            .then((response) => response.json())
            .then((response) => {
                const podcasts = response.feed?.entry
                return podcasts.map((podcast) => this.mapExternalPodcast(podcast))
            })
    }

    getEpisodes = async (podcastId) => {
        return fetch(getPodcasts(podcastId))
            .then((response) => response.json())
            .then((response) => {
                const episodes = JSON.parse(response.contents).results.slice(1)
                return episodes.map((episode) => this.mapExternalEpisode(episode))
            })
    }

    mapExternalPodcast = (podcast) => {
        return {
            id: podcast.id.attributes['im:id'],
            title: podcast['im:name'].label,
            author: podcast['im:artist'].label,
            image: podcast['im:image'].at(-1).label,
            summary: podcast.summary.label
        }
    }

    mapExternalEpisode = (episode) => {
        return {
            id: episode.trackId,
            podcastId: episode.collectionId,
            title: episode.trackName,
            releaseDate: new Date(episode.releaseDate).toLocaleDateString(),
            duration: parseTimeToHumanReadable(episode.trackTimeMillis),
            summary: episode.description,
            trackUrl: episode.episodeUrl
        }
    }

    filter = (podcasts, filter) => {
        const filteredPodcasts = podcasts.filter(
            (podcast) =>
                podcast.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
                podcast.author.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        )
        return filteredPodcasts
    }

    getPodcastById = (podcasts, podcastId) => {
        return podcasts.filter((podcast) => podcast.id === podcastId)
    }

    getEpisodeById = (episodes, podcastId, episodeId) => {
        return episodes.filter(
            (episode) => episode.id.toString() === episodeId.toString() && episode.podcastId.toString() === podcastId.toString()
        )
    }
}
