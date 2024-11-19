import { truncateString } from '@/const/functions'
import { signUpSchema } from '@/eschema'
import { cn } from '@/lib/utils'
import { CircleUserRound } from 'lucide-react'
import { z } from 'zod'

interface BasicInfoUserProps {
  /**
   * The user to be displayed.
   */
  user: z.infer<typeof signUpSchema> | null
  /**
   * Optional additional class names for styling.
   */
  className?: string
  /**
   * The variant of the component.
   */
  variant?: 'only logo' | 'complete'
}

function BasicInfoUser({ className = '', variant = 'only logo', user }: BasicInfoUserProps) {
  return (
    <div className={cn('flex gap-2 items-center justify-between', className)}>
      {user?.avatar ? (
        <img src={user?.avatar} alt='avatar' className='w-10 h-10 rounded-full' />
      ) : (
        <CircleUserRound className='!w-10 !h-10 justify-self-center text-gray-500 stroke-primary' />
      )}
      <div className={cn('flex flex-col', variant === 'only logo' && 'hidden')}>
        <span className='text-sm font-semibold'>{truncateString(user?.username || '')}</span>
        <span className='text-sm font-normal'>{truncateString(user?.email || '')}</span>
      </div>
    </div>
  )
}

export { BasicInfoUser }
