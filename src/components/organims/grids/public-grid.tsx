import { PublicCard } from '@/components/molecules/card/public-card'
import { usePublicationProvider } from '@/hook/hook-publication'

function PublicGrid() {
  const { publications } = usePublicationProvider()
  return (
    <section className='grid w-full gap-5'>
      {publications.map((publication) => (
        <PublicCard key={publication.id} public={publication} />
      ))}
    </section>
  )
}

export { PublicGrid }
