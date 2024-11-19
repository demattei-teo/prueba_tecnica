import { BasicInfoUser } from '@/components/atoms/user/basic-info-user'
import { Button } from '@/components/ui/button'
import { Character } from '@/eschema/api.schema'
import { getCharacters } from '@/services/get-characters'
import { ChevronDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import { AvatarTooltip, Input, Line, Popover, PopoverContent, PopoverTrigger } from '@/components'
import { useUserProvider } from '@/hook/hook-user'

function ChangeAvatarBox() {
  const { user } = useUserProvider()
  const [search, setSearch] = useState('')
  const [characters, setCharacters] = useState<Character[]>([])
  async function getAllCharacters() {
    try {
      const characters = await getCharacters()
      if (!characters) return toast.error('Error al obtener los personajes')
      setCharacters(characters.results)
    } catch (error) {
      toast.error('Error al obtener los personajes')
    }
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <div className='flex gap-2 p-5 w-full lg:min-w-96 bg-white rounded-lg items-center justify-between'>
      <BasicInfoUser user={user} variant='complete' />

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='ghost' className='w-10 h-10' size='icon'>
            <ChevronDownIcon className='w-6 h-6' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-full flex flex-col gap-3 p-4 rounded-md bg-white'>
          <Input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Buscar personajes' />
          <Line />
          <span className='text-lg text-center font-semibold'>Elije un nuevo avatar</span>
          <div className='grid grid-cols-4 gap-3'>
            {characters
              .filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
              .map((character, index) => (
                <AvatarTooltip key={index} character={character} />
              ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { ChangeAvatarBox }
