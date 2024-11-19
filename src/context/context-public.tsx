import { defaultPublications } from '@/const/publics'
import { Public } from '@/eschema/api.schema'
import { useUserProvider } from '@/hook/hook-user'
import { createContext, useEffect, useState } from 'react'

interface valueType {
  /**
   * The publications state.
   */
  publications: Public[]
  /**
   * Updates the publications state.
   * @param {Public[]} value - The new value of the publications.
   */
  setpublications: (value: Public[]) => void
  /**
   * Updates the reload state.
   * @param {boolean} value - The new value of the reload state.
   */
  setReload: (value: boolean) => void
  /**
   * The reload state.
   */
  reload: boolean
  /**
   * Updates the search state.
   * @param {string} value - The new value of the search state.
   */
  setSearch: (value: string) => void
  /**
   * The search state.
   */
  search: string
}

export const publicationContext = createContext<valueType | null>(null)

interface userProps {
  children: React.ReactNode
}

/**
 * Provides the publications state and its methods to update it to the children components.
 * Also, it validates the comments of the publications if the user is logged in, by replacing
 * the user information with the logged in user information.
 * @example
 * <PublicationProvider>
 *   <ComponentThatUsesTheState />
 * </PublicationProvider>
 * @param {React.ReactNode} children - The children components that will use the state.
 * @returns {JSX.Element} The component with the state as context.
 */

function PublicationProvider({ children }: userProps) {
  const { user } = useUserProvider()
  const [search, setSearch] = useState('')
  const [publications, setpublications] = useState<Public[]>(defaultPublications)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    const storagePublications = JSON.parse(localStorage.getItem('publics') as string)

    if (storagePublications) setpublications(publications)

    if (!storagePublications) localStorage.setItem('publics', JSON.stringify(publications))
  }, [])

  /**
   * Updates the publications stored in local storage with the new value.
   * @param {Public[]} value - The new value of the publications.
   */
  function updatePublications(value: Public[]) {
    localStorage.setItem('publics', JSON.stringify(value))
  }

  useEffect(() => {
    const storagePublications = JSON.parse(localStorage.getItem('publics') as string)
    /**
     * Updates the publications stored in local storage with the new values of the user.
     */
    const updatedPublicationsByUser = storagePublications?.map((pub: Public) => {
      const comments = pub.comments.map((comment: Public['comments'][number]) => {
        if (user?.username === comment.userName) {
          return {
            ...comment,
            userName: user?.username ?? 'Anonymous',
            userAvatar: user?.avatar ?? '',
            userEmail: user?.email ?? ''
          }
        } else {
          return comment
        }
      })
      return {
        ...pub,
        comments
      }
    })

    setpublications(updatedPublicationsByUser.sort((a: Public, b: Public) => b.id - a.id))
  }, [reload, user])

  const values: valueType = {
    setSearch,
    search,
    publications,
    setpublications: updatePublications,
    setReload,
    reload
  }

  return <publicationContext.Provider value={values}>{children}</publicationContext.Provider>
}

export { PublicationProvider }
