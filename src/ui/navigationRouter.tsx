import { createBrowserRouter } from 'react-router-dom'
import { DashboardPage } from './pages'
import Router from '@/common/utils/router'

export const navigationRouter = createBrowserRouter([
  { path: Router.dashboard, element: <DashboardPage /> },
])
