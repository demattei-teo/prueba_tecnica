import { z } from 'zod'

const auth = z.object({
  username: z.string().min(2, { message: 'El nombre de usuario debe tener al menos 2 caracteres.' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
  verify: z.enum(['verify', 'not verify']).default('not verify')
})

const signUpSchema = auth.extend({
  email: z.string().email({ message: 'Dirección de correo electrónico no válida.' }),
  avatar: z.string().optional()
})

export { auth, signUpSchema }
