import { signUpSchema } from '@/eschema'
import { createContext, useEffect, useState } from 'react'
import { z } from 'zod'

interface valueType {
  /**
   * The user state.
   */
  user: z.infer<typeof signUpSchema> | null
  /**
   * Updates the reload state.
   * @param {boolean} value - The new value of the reload state.
   */
  setReload: (value: boolean) => void
  /**
   * The reload state.
   */
  reload: boolean
}

export const UserContext = createContext<valueType | null>(null)

interface userProps {
  /**
   * The children components that will use the state.
   */
  children: React.ReactNode
}

/**
 * Provides the user state and its methods to update it to the children components.
 * Also, it validates the user if the user is logged in, by replacing
 * the user information with the logged in user information.
 * @example
 * <UserProvider>
 *   <ComponentThatUsesTheState />
 * </UserProvider>
 * @param {React.ReactNode} children - The children components that will use the state.
 * @returns {JSX.Element} The component with the state as context.
 */

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
