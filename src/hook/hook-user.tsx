import { UserContext } from '@/context'
import { useContext } from 'react'

function useUserProvider() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUserProvider must be used within a UserProvider')

  return context
}

export { useUserProvider }
