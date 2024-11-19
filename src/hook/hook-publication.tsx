import { publicationContext } from '@/context/context-public'
import { useContext } from 'react'

/**
 * usePublicationProvider hook
 *
 * Returns the publication context object, which contains the list of publications,
 * the search term, and methods to update the list of publications and the search
 * term.
 *
 * @returns {Object} The publication context object.
 *
 * @throws {Error} If the hook is used outside of a PublicationProvider component.
 */
function usePublicationProvider() {
  const context = useContext(publicationContext)
  if (!context) throw new Error('usePublications must be used within a PublicationProvider')

  return context
}

export { usePublicationProvider }
