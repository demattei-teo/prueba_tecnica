/**
 * Schema for a character.
 */

export interface Character {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown'
  origin: LocationReference
  location: LocationReference
  image: string
  episode: string[]
  url: string
  created: string
}

/**
 * Schema for a location reference.
 */

export interface LocationReference {
  name: string
  url: string
}

/**
 * Schema for a location.
 */

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

/**
 * Schema for an episode.
 */

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

/**
 * Schema for a paginated response.
 */
export interface PaginatedResponse<T> {
  info: PaginationInfo
  results: T[]
}

/**
 * Schema for pagination information.
 */
export interface PaginationInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

/**
 * Schema for a public.
 */

export interface Public extends Character {
  userName: string
  userAvatar: string
  userEmail: string
  PubliccreatedAt: string
  question: string
  comments: {
    id: number
    comment: string
    userName: string
    userAvatar: string
    userEmail: string
    CommentcreatedAt: string
  }[]
}
