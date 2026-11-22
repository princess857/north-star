import { useEffect, useMemo, useState } from 'react'
import { initialStudents } from '../data/mockData'
import { SchoolContext } from './school-context'

const STUDENTS_KEY = 'northstar.students.v1'
const SESSION_KEY = 'northstar.session.v1'

function readStudents() {
  try {
    const stored = localStorage.getItem(STUDENTS_KEY)
    return stored ? JSON.parse(stored) : initialStudents
  } catch {
    return initialStudents
  }
}

export function SchoolProvider({ children }) {
  const [students, setStudents] = useState(readStudents)
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem(SESSION_KEY) !== 'signed-out')

  useEffect(() => localStorage.setItem(STUDENTS_KEY, JSON.stringify(students)), [students])

  const value = useMemo(() => ({
    students,
    isAuthenticated,
    addStudent: (student) => setStudents((current) => [{ ...student, id: `stu-${Date.now()}` }, ...current]),
    updateStudent: (student) => setStudents((current) => current.map((item) => item.id === student.id ? student : item)),
    deleteStudent: (id) => setStudents((current) => current.filter((student) => student.id !== id)),
    signIn: () => { localStorage.setItem(SESSION_KEY, 'active'); setIsAuthenticated(true) },
    signOut: () => { localStorage.setItem(SESSION_KEY, 'signed-out'); setIsAuthenticated(false) },
  }), [students, isAuthenticated])

  return <SchoolContext.Provider value={value}>{children}</SchoolContext.Provider>
}

