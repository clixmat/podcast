import React from 'react'
import { PodcastRepository } from '../../services/PodcastRepository'
import { PodcastDetail } from './PodcastDetail'

const repository = new PodcastRepository()

export class PodcastDetailMain {
    static create() {
        return <PodcastDetail repository={repository} />
    }
}
