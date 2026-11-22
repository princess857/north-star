import { useContext } from 'react'
import { SchoolContext } from './school-context'

export function useSchool() {
  const context = useContext(SchoolContext)
  if (!context) throw new Error('useSchool must be used within SchoolProvider')
  return context
}