// Schema principal para un personaje
export interface Character {
  id: number // Identificador único del personaje
  name: string // Nombre del personaje
  status: 'Alive' | 'Dead' | 'unknown' // Estado del personaje
  species: string // Especie del personaje
  type: string // Tipo de personaje (puede estar vacío)
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown' // Género
  origin: LocationReference // Origen del personaje (solo nombre y url)
  location: LocationReference // Última ubicación conocida (solo nombre y url)
  image: string // URL de la imagen del personaje
  episode: string[] // URLs de episodios donde aparece el personaje
  url: string // URL del recurso del personaje
  created: string // Fecha de creación en la base de datos
}

// Referencia a un lugar o recurso
export interface LocationReference {
  name: string // Nombre del lugar
  url: string // URL del recurso
}

// Schema para una ubicación
export interface Location {
  id: number // Identificador único de la ubicación
  name: string // Nombre de la ubicación
  type: string // Tipo de lugar (ej. Planeta, Microverso)
  dimension: string // Dimensión del lugar (ej. "C-137")
  residents: string[] // URLs de los personajes que han estado en esta ubicación
  url: string // URL del recurso
  created: string // Fecha de creación en la base de datos
}

// Schema para un episodio
export interface Episode {
  id: number // Identificador único del episodio
  name: string // Nombre del episodio
  air_date: string // Fecha de emisión del episodio
  episode: string // Código del episodio (ej. "S01E01")
  characters: string[] // URLs de los personajes que aparecen en el episodio
  url: string // URL del recurso
  created: string // Fecha de creación en la base de datos
}

// Respuesta paginada (aplica a todos los endpoints principales)
export interface PaginatedResponse<T> {
  info: PaginationInfo // Información de paginación
  results: T[] // Resultados específicos del endpoint
}

// Información de paginación
export interface PaginationInfo {
  count: number // Total de elementos
  pages: number // Total de páginas
  next: string | null // URL de la siguiente página
  prev: string | null // URL de la página anterior
}

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
