interface InfoProps {
    pages: number
    next: number | null  // Can be null
    prev: number | null  // Can be null
    count: number
}

export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  // Remove info from EpisodeProps as it's not part of each episode
}

// Episode interface for API response
export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
}

export type EpisodeCardProps = Pick<Episode, 'id' | 'name'| 'air_date' | "episode">