import { ChangeAvatarBox, Navbar, PublicGrid, StreamLinks } from '@/components'

function Home() {
  return (
    <>
      <header className='w-full bg-white p-3 flex items-center justify-center'>
        <Navbar />
      </header>
      <main className='w-full gap-10 flex flex-col lg:flex-row items-start py-10 h-screen max-w-7xl p-4 mx-auto'>
        <ChangeAvatarBox />
        <PublicGrid />
        <StreamLinks />
      </main>
    </>
  )
}

export { Home }
