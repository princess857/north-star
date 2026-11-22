import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SchoolProvider } from './context/SchoolContext.jsx'
import { useSchool } from './context/useSchool'
import Skeleton from './components/ui/Skeleton'
import './App.css'

const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const Students = lazy(() => import('./pages/Students'))
const Teachers = lazy(() => import('./pages/Teachers'))

function AppLoading() {
  return <div className="app-shell app-loading" aria-label="Loading school workspace"><aside className="sidebar"><Skeleton className="skeleton-brand" /><Skeleton className="skeleton-school" /><Skeleton className="skeleton-nav" /><Skeleton className="skeleton-nav" /><Skeleton className="skeleton-nav" /></aside><div className="workspace"><header className="topbar"><Skeleton className="skeleton-search" /><Skeleton className="skeleton-avatar" /></header><main className="main-content"><Skeleton className="skeleton-heading" /><div className="skeleton-stats"><Skeleton /><Skeleton /><Skeleton /><Skeleton /></div><Skeleton className="skeleton-panel" /></main></div></div>
}

function ProtectedLayout() {
  const { isAuthenticated } = useSchool()
  return isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="teachers" element={<Teachers />} />
      </Route>
      <Route path="*" element={<Navigate to="/app" replace />} />
    </Routes>
  )
}

export default function App() {
  return <BrowserRouter><SchoolProvider><Suspense fallback={<AppLoading />}><AppRoutes /></Suspense></SchoolProvider></BrowserRouter>
}
