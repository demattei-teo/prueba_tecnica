import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { BasicInfoUser, Line, Popover, PopoverContent, PopoverTrigger } from '@/components/'
import { useUserProvider } from '@/hook/hook-user'

interface UserBoxProps {
  className?: string
  variant?: 'only logo' | 'complete'
}

function UserBox({ className, variant = 'only logo' }: UserBoxProps) {
  const { user } = useUserProvider()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          className={cn('flex items-start justify-start p-0 gap-2 text-start hover:bg-transparent', className)}
        >
          <BasicInfoUser user={user} variant={variant} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full flex flex-col gap-3 p-4 rounded-md bg-white'>
        <BasicInfoUser user={user} variant='complete' />
        <Line />
        <div>
          <Button
            variant='ghost'
            onClick={() => {
              localStorage.removeItem('user')
              window.location.reload()
            }}
            className='w-full'
          >
            Cerrar sesión
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { UserBox }
