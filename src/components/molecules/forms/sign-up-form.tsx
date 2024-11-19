import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { famousCharacterID } from '@/const'
import { signUpSchema } from '@/eschema'
import { Character } from '@/eschema/api.schema'
import { useUserProvider } from '@/hook/user'
import { cn } from '@/lib/utils'
import { getFamousCharacter } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

function SignUpForm() {
  const { setReload } = useUserProvider()
  const [famousCharactersState, setFamousCharactersState] = useState<Character[] | null>(null)
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
      avatar: ''
    }
  })

  async function famousCharacter(id: number[]) {
    try {
      const response: Character[] = await getFamousCharacter(id)
      if (!response) return toast.error('Error al obtener el personaje')
      setFamousCharactersState(response)
    } catch (error) {
      toast.error('Error al obtener el personaje')
    }
  }

  useEffect(() => {
    famousCharacter(famousCharacterID)
      .then((res) => res)
      .catch((err) => console.log(err))
  }, [])

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    localStorage.setItem('user', JSON.stringify(values))
    toast.success('Registro exitoso')
    setReload(true)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 md:grid-cols-2 grid gap-x-3.5'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='col-span-full'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div className='grid items-center justify-items-center gap-y-4 col-span-full'>
          <FormLabel>¿Deseas usar un avatar?</FormLabel>
          <div className='flex gap-4 items-center flex-wrap justify-center'>
            {famousCharactersState?.map((character) => (
              <Button
                onClick={() => form.setValue('avatar', character.image)}
                size='icon'
                variant='ghost'
                type='button'
                key={character.id}
                className={cn(
                  'flex gap-2 items-center justify-center hover:scale-110 hover:shadow-lg transition duration-200 hover:bg-transparent rounded-full',
                  character.image === form.watch('avatar') && 'scale-125'
                )}
              >
                <img src={character.image} alt={character.name} className='w-10 h-10 rounded-full' />
              </Button>
            ))}
          </div>
        </div>
        <Button className='col-span-full' type='submit' disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? <Loader2Icon size={20} className='animate-spin' /> : 'Registrarse'}
        </Button>
      </form>
    </Form>
  )
}

export { SignUpForm }
