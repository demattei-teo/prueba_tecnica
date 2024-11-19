import { z } from 'zod'

/**
 * Schema for authentication.
 */

const auth = z.object({
  username: z.string().min(2, { message: 'El nombre de usuario debe tener al menos 2 caracteres.' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
  verify: z.enum(['verify', 'not verify']).default('not verify')
})

/**
 * Schema for sign up.
 */

const signUpSchema = auth.extend({
  email: z
    .string()
    .min(1, { message: 'El campo es obligatorio.' })
    .email({ message: 'Dirección de correo electrónico no válida.' }),
  avatar: z.string().optional()
})

export { auth, signUpSchema }
