import { Public } from '@/eschema/api.schema'

const defaultPublications: Public[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
    userName: 'RickMaster',
    userAvatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    userEmail: 'rick@c137.com',
    PubliccreatedAt: '2024-11-18T12:00:00Z',
    question: '¿Cuál es el invento más peligroso de Rick?',
    comments: [
      {
        id: 101,
        comment: '¡El Portal Gun es definitivamente peligroso!',
        userName: 'MortyFan',
        userAvatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        userEmail: 'morty@earth.com',
        CommentcreatedAt: '2024-11-18T13:00:00Z'
      },
      {
        id: 102,
        comment: 'Yo diría que cualquier cosa que cree después de beber.',
        userName: 'SummerVibes',
        userAvatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        userEmail: 'summer@dimension.com',
        CommentcreatedAt: '2024-11-18T13:30:00Z'
      }
    ]
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
    userName: 'MortyFan',
    userAvatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    userEmail: 'morty@earth.com',
    PubliccreatedAt: '2024-11-18T12:30:00Z',
    question: '¿Cómo ha cambiado Morty desde el primer episodio?',
    comments: [
      {
        id: 201,
        comment: '¡Ahora tiene más carácter, aunque sigue siendo un desastre!',
        userName: 'RickMaster',
        userAvatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        userEmail: 'rick@c137.com',
        CommentcreatedAt: '2024-11-18T14:00:00Z'
      },
      {
        id: 202,
        comment: 'Morty parece más inteligente ahora, pero a veces sigue siendo torpe.',
        userName: 'SummerVibes',
        userAvatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        userEmail: 'summer@dimension.com',
        CommentcreatedAt: '2024-11-18T14:30:00Z'
      }
    ]
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z',
    userName: 'SummerVibes',
    userAvatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    userEmail: 'summer@dimension.com',
    PubliccreatedAt: '2024-11-18T13:00:00Z',
    question: '¿Qué episodio muestra mejor la personalidad de Summer?',
    comments: [
      {
        id: 301,
        comment: 'El del Titanic muestra su lado más fuerte y divertido.',
        userName: 'RickMaster',
        userAvatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        userEmail: 'rick@c137.com',
        CommentcreatedAt: '2024-11-18T15:00:00Z'
      },
      {
        id: 302,
        comment: 'Creo que el de los matrimonios simulados.',
        userName: 'MortyFan',
        userAvatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        userEmail: 'morty@earth.com',
        CommentcreatedAt: '2024-11-18T15:30:00Z'
      }
    ]
  },
  {
    id: 4,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/5',
    created: '2017-11-04T19:26:56.301Z',
    userName: 'JerryLover',
    userAvatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    userEmail: 'jerry@dimension.com',
    PubliccreatedAt: '2024-11-18T14:00:00Z',
    question: '¿Jerry es realmente gracioso o solo torpe?',
    comments: [
      {
        id: 401,
        comment: '¡Ambas cosas! Es un personaje único.',
        userName: 'MortyFan',
        userAvatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        userEmail: 'morty@earth.com',
        CommentcreatedAt: '2024-11-18T16:00:00Z'
      },
      {
        id: 402,
        comment: 'A veces es demasiado torpe para ser gracioso.',
        userName: 'RickMaster',
        userAvatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        userEmail: 'rick@c137.com',
        CommentcreatedAt: '2024-11-18T16:30:00Z'
      }
    ]
  }
  // Agrega más objetos con el mismo criterio si necesitas.
]
export { defaultPublications }
