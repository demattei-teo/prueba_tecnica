import { NavLinks } from '@/components/molecules/links/nav-links'
import { NavbarSheet } from '@/components/molecules/sheets/navbar-sheet'
import { UserBox } from '@/components/molecules/user/userBox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [openSearchMobile, setOpenSearchMobile] = useState(false)
  return (
    <nav className='max-w-7xl w-full items-center flex justify-between gap-4 mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='lg:max-w-80 items-center gap-10 w-full justify-between hidden lg:flex'>
        <UserBox variant='only logo' className='justify-self-start' />
        <NavLinks className='hidden lg:flex' />
      </div>
      {!openSearchMobile && <img src='/logo.png' alt='logo' className='h-12 w-auto' />}
      {openSearchMobile && <Input placeholder='Buscar publicaciones' className='w-full max-w-80 lg:hidden' />}

      <div className='gap-2 justify-between flex lg:hidden'>
        {!openSearchMobile ? (
          <Button variant='outline' className='p-1 w-8 h-8' size='icon' onClick={() => setOpenSearchMobile(true)}>
            <SearchIcon className='w-6 h-6' />
          </Button>
        ) : (
          <Button variant='outline' onClick={() => setOpenSearchMobile(false)} className='p-1 w-8 h-8' size='icon'>
            <XIcon className='w-6 h-6' />
          </Button>
        )}
        <NavbarSheet />
      </div>
      <Input placeholder='Buscar publicaciones' className='w-full max-w-80 hidden lg:block' />
    </nav>
  )
}

export { Navbar }
