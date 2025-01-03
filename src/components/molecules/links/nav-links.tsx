import { Routes } from '@/const'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface NavLinksProps {
  /**
   * Optional additional class names for styling.
   */
  className?: string
}

function NavLinks({ className }: NavLinksProps) {
  return (
    <ul className={cn('flex lg:max-w-80 flex-col lg:flex-row gap-4 text-sm', className)}>
      <li>
        <Link className='font-medium hover:text-primary transition-colors' to={Routes.Home}>
          Inicio
        </Link>
      </li>
      <li>
        <Link className='font-medium hover:text-primary transition-colors' to={Routes.Publication}>
          Publicaciones
        </Link>
      </li>
    </ul>
  )
}

export { NavLinks }
