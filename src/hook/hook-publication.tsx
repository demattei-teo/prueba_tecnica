import { publicationContext } from '@/context/context-public'
import { useContext } from 'react'

function usePublicationProvider() {
  const context = useContext(publicationContext)
  if (!context) throw new Error('usePublications must be used within a PublicationProvider')

  return context
}

export { usePublicationProvider }
