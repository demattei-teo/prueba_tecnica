import { z } from 'zod'

const commentSchema = z.object({
  newComment: z.string().min(2, { message: 'El comentario debe tener al menos 2 caracteres.' })
})

const publicationSchema = z.object({
  question: z
    .string()
    .min(2, { message: 'La pregunta debe tener al menos 2 caracteres.' })
    .max(200, { message: 'La pregunta no puede tener más de 200 caracteres.' }),
  characterName: z.string().min(1, { message: 'El personaje es obligatorio.' })
})

export { commentSchema, publicationSchema }
