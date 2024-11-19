import { defaultPublications } from '@/const/publics'
import { Public } from '@/eschema/api.schema'
import { createContext, useEffect, useState } from 'react'

interface valueType {
  publications: Public[]
  setpublications: (value: Public[]) => void
  setReload: (value: boolean) => void
  reload: boolean
}

export const publicationContext = createContext<valueType | null>(null)

interface userProps {
  children: React.ReactNode
}

function PublicationProvider({ children }: userProps) {
  const [publications, setpublications] = useState<Public[]>(defaultPublications)

  const [reload, setReload] = useState(false)

  useEffect(() => {
    const storagePublications = JSON.parse(localStorage.getItem('publics') as string)

    if (storagePublications) setpublications(publications)

    if (!storagePublications) localStorage.setItem('publics', JSON.stringify(publications))
  }, [])

  function updatePublications(value: Public[]) {
    localStorage.setItem('publics', JSON.stringify(value))
  }

  useEffect(() => {
    const storagePublications = JSON.parse(localStorage.getItem('publics') as string)
    setpublications(storagePublications)
  }, [reload])

  const values: valueType = {
    publications,
    setpublications: updatePublications,
    setReload,
    reload
  }

  return <publicationContext.Provider value={values}>{children}</publicationContext.Provider>
}

export { PublicationProvider }
