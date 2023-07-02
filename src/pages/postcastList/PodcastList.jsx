import React, { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

import { PodcastCard } from './components/PostcastCard'
import { usePodcast } from '../../hooks/usePodcast'
import { useLoader } from '../../hooks/useLoader'

import './PodcastList.scss'

export function PodcastList({ repository }) {
    const [errorFilter, setErrorFilter] = useState(null)
    const [filter, updateFilter] = useState('')

    const { loaderPodcastActive } = useLoader()
    const { repositoryData, filterPodcasts } = usePodcast({ repository, filter })

    const debouncedFilterPodcast = useCallback(
        debounce((filter) => {
            if (!filter || filter.length === 0 || filter.length >= 3) {
                setErrorFilter(null)
                filterPodcasts(filter)
            } else if (filter.length < 3) {
                setErrorFilter('The filter must contains at least 3 chars')
            }
        }, 300),
        [filterPodcasts, errorFilter]
    )

    const handleChangeFilter = (event) => {
        const newFilter = event.target.value
        updateFilter(newFilter)
        debouncedFilterPodcast(newFilter)
    }

    let resultFilter
    if (!loaderPodcastActive && repositoryData.length === 0 && filter) {
        resultFilter = `No podcasts found for ${filter}`
    }

    return (
        <>
            <div className="podcast-content">
                <div className="podcast-list__filter">
                    <span className="podcast-list__results">{repositoryData.length}</span>
                    <input
                        className="podcast-list__search"
                        onChange={handleChangeFilter}
                        value={filter}
                        name="filter"
                        placeholder="Filter podcasts..."
                    />
                </div>
                <p className="podcast-list__error">{errorFilter}</p>
            </div>
            {!resultFilter ? (
                <section className="podcast-list">
                    {!loaderPodcastActive && repositoryData.map((podcast) => <PodcastCard key={podcast.id} podcast={podcast} />)}
                </section>
            ) : (
                <div>
                    <span>{resultFilter}</span>
                </div>
            )}
        </>
    )
}
