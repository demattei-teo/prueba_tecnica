import { signUpSchema } from '@/eschema'
import { createContext, useEffect, useState } from 'react'
import { z } from 'zod'

interface valueType {
  user: z.infer<typeof signUpSchema> | null
  setReload: (value: boolean) => void
  reload: boolean
}

export const UserContext = createContext<valueType | null>(null)

interface userProps {
  children: React.ReactNode
}

function UserProvider({ children }: userProps) {
  const [user, setUser] = useState<valueType['user']>(null)

  const [reload, setReload] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string)
    setUser(user)
  }, [reload])

  const values = {
    user,
    setReload,
    reload
  }

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export { UserProvider }
