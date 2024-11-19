import { ChangeAvatarBox, Navbar, PublicationForm, PublicGrid, StreamLinks } from '@/components'

function Publication() {
  return (
    <>
      <header className='w-full bg-white p-3 flex items-center justify-center'>
        <Navbar />
      </header>
      <main className='w-full gap-10 flex flex-col lg:flex-row items-start py-10 max-w-7xl p-4 mx-auto'>
        <section className='w-full lg:w-1/2 flex flex-col gap-10 items-start'>
          <ChangeAvatarBox />
          <StreamLinks />
        </section>
        <section className='w-full flex flex-col gap-10 items-start'>
          <PublicationForm />
          <PublicGrid />
        </section>
      </main>
    </>
  )
}

export { Publication }
