import { z } from 'zod'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components'
import { Routes } from '@/const'
import { auth } from '@/eschema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

function SignInForm() {
  const form = useForm<z.infer<typeof auth>>({
    resolver: zodResolver(auth),
    defaultValues: {
      username: '',
      password: '',
      verify: 'verify'
    }
  })
  const user = JSON.parse(localStorage.getItem('user') as string)

  /**
   * Handles the submission of the sign-in form.
   * If the user does not exist, shows an error message.
   * If the user exists and the password is correct, logs the user in
   * and redirects to the home page.
   * If the user exists but the password is incorrect, shows an error message.
   * @param {z.infer<typeof auth>} values The form values
   */
  function onSubmit(values: z.infer<typeof auth>) {
    if (!user) return toast.error('Por favor, regístrate antes de continuar')

    if (values.username === user.username && values.password === user.password) {
      localStorage.setItem('user', JSON.stringify({ ...user, verify: values.verify }))
      toast.success('Sesión iniciada con éxito')
      form.reset()
      window.location.href = Routes.Home
    } else {
      toast.error('Usuario o contraseña incorrectos')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de usuario</FormLabel>
              <FormControl>
                <Input placeholder='Nombre de usuario' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder='Contraseña' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit' disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? <Loader2Icon size={20} className='animate-spin' /> : 'Iniciar sesión'}
        </Button>
      </form>
    </Form>
  )
}

export { SignInForm }
