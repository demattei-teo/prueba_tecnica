import { PublicCard } from '@/components'
import { usePublicationProvider } from '@/hook/hook-publication'

function PublicGrid() {
  const { publications, search } = usePublicationProvider()
  return (
    <section className='grid w-full gap-5'>
      {publications
        .filter((publication) => publication.question.toLowerCase().includes(search.toLowerCase()))
        .map((publication) => (
          <PublicCard key={publication.id} public={publication} />
        ))}
    </section>
  )
}

export { PublicGrid }
