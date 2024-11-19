import { Button, Tooltip, TooltipContent, TooltipTrigger } from '@/components/'
import { Character } from '@/eschema/api.schema'

interface CharacterTooltipProps {
  /**
   * The character to be displayed.
   */
  character: Character
  /**
   * The function to be called when the character is clicked.
   * @param {string} name - The name of the character.
   */
  getCharacter: ({ name }: { name: string }) => void
}

function CharacterTooltip({ character, getCharacter }: CharacterTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={() => getCharacter({ name: character.name })} variant='ghost' size='icon' asChild>
          <img src={character.image} alt={character.name} className='w-10 h-10 rounded-full cursor-pointer' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{character.name}</TooltipContent>
    </Tooltip>
  )
}

export { CharacterTooltip }
