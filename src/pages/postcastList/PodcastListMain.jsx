import React from 'react'
import { PodcastRepository } from '../../services/PodcastRepository'
import { PodcastList } from './PodcastList'

const repository = new PodcastRepository()

export class PodcastListMain {
    static create() {
        return <PodcastList repository={repository} />
    }
}
