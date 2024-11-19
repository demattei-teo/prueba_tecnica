import { z } from 'zod'

const commentSchema = z.object({
  newComment: z.string().min(2, { message: 'El comentario debe tener al menos 2 caracteres.' })
})

export { commentSchema }
