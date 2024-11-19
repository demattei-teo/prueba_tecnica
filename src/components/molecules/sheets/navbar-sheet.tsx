import { Button, NavLinks, Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger, UserBox } from '@/components'
import { MenuIcon } from 'lucide-react'

function NavbarSheet() {
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden' asChild>
        <Button variant='outline' className='p-1 w-8 h-8' size='icon'>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='grid gap-10'>
        <SheetHeader className='flex items-center pt-6'>
          <img src='/logo.png' alt='logo' className='h-12 w-full max-w-72' />
        </SheetHeader>
        <NavLinks className='flex flex-col gap-4' />
        <SheetFooter>
          <UserBox variant='complete' className='w-full self-end justify-self-end' />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export { NavbarSheet }
