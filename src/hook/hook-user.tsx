import { UserContext } from '@/context'
import { useContext } from 'react'

/**
 * useUserProvider hook
 *
 * Returns the user context object, which contains the user state and its methods to update it.
 *
 * @returns {Object} The user context object.
 *
 * @throws {Error} If the hook is used outside of a UserProvider component.
 */
function useUserProvider() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUserProvider must be used within a UserProvider')

  return context
}

export { useUserProvider }
