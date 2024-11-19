import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Character } from '@/eschema/api.schema'
import { useUserProvider } from '@/hook/hook-user'

interface AvatarTooltipProps {
  character: Character
}

function AvatarTooltip({ character }: AvatarTooltipProps) {
  const { user, setReload, reload } = useUserProvider()
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={() => {
            localStorage.setItem(
              'user',
              JSON.stringify({
                ...user,
                avatar: character.image
              })
            )
            setReload(!reload)
          }}
          variant='ghost'
          size='icon'
          asChild
        >
          <img src={character.image} alt={character.name} className='w-10 h-10 rounded-full cursor-pointer' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{character.name}</TooltipContent>
    </Tooltip>
  )
}

export { AvatarTooltip }
