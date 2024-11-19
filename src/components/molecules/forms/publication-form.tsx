import { z } from 'zod'

import {
  Button,
  CharacterTooltip,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Line,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components'
import { publicationSchema } from '@/eschema'
import { Character, Public } from '@/eschema/api.schema'
import { usePublicationProvider } from '@/hook/hook-publication'
import { useUserProvider } from '@/hook/hook-user'
import { getCharacters } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon, NotebookPenIcon, UsersRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

function PublicationForm() {
  const [search, setSearch] = useState('')
  const { user } = useUserProvider()
  const { setReload, reload, publications, setpublications } = usePublicationProvider()
  const [characters, setCharacters] = useState<Character[]>([])
  const form = useForm<z.infer<typeof publicationSchema>>({
    resolver: zodResolver(publicationSchema),
    defaultValues: {
      question: '',
      characterName: ''
    }
  })

  /**
   * Function that takes care of getting all the characters from the API.
   */
  async function getAllCharacters() {
    try {
      const characters = await getCharacters()
      if (!characters) return toast.error('Error al obtener los personajes')
      setCharacters(characters.results)
    } catch (error) {
      toast.error('Error al obtener los personajes')
    }
  }

  /**
   * Function which is responsible for saving a new publication in the status
   * of the page and reset the form..
   * @param {z.infer<typeof publicationSchema>} values - Los valores que
   * will be saved in the publication.
   */
  function onSubmit(values: z.infer<typeof publicationSchema>) {
    if (!user) return toast.error('Por favor, regístrate antes de continuar')
    const nuevasPublicaciones: Public[] = [
      ...publications,
      {
        ...characters.filter((character) => character.name === values.characterName)[0],
        question: values.question,
        id: publications.length + 1,
        userAvatar: user.avatar ?? '',
        userName: user.username,
        userEmail: user.email,
        PubliccreatedAt: new Date().toISOString(),
        comments: []
      }
    ]
    setpublications(nuevasPublicaciones)
    setReload(!reload)
    form.reset()
  }
  /**
   * Function that gets the character from the API and sets it in the form.
   * @param {string} name - The name of the character.
   */
  function getCharacter({ name = characters[0].name }: { name?: string }) {
    form.setValue('characterName', name)
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='bg-white p-5 w-full grid gap-4 rounded-lg'>
        <div className='flex w-full [&>svg]:stroke-gray-400 gap-2 items-center'>
          <NotebookPenIcon size={32} />
          <FormField
            control={form.control}
            name='question'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input className='w-full' placeholder='Realice su publicación...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Line />
        <div className='flex gap-2 justify-between'>
          <div className='flex gap-2 flex-col items-center'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={form.formState.errors.characterName ? 'destructive' : 'ghost'}
                  className='w-auto justify-self-start'
                >
                  <UsersRound className='w-6 h-6' />
                  <span>{form.watch('characterName') === '' ? 'Elige un personaje' : form.watch('characterName')}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='items-center flex flex-col gap-3 p-4 rounded-md bg-white'>
                <Input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Buscar personajes' />
                <Line />
                <span className='text-sm font-semibold'>¿Sobre qué personaje te gustaría saber más? </span>
                <div className='grid grid-cols-5 gap-3'>
                  {characters
                    .filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
                    .map((character, index) => (
                      <CharacterTooltip getCharacter={getCharacter} key={index} character={character} />
                    ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Button type='submit' disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <Loader2Icon size={20} className='animate-spin' /> : 'Publicar'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export { PublicationForm }
