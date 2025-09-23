import { createBrowserRouter } from 'react-router'
import App from './App'
import Welcome from './pages/Welcome'
import Portfolio from './pages/Portfolio'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Welcome
      },
      {
        path: "/portfolio",
        Component: Portfolio
      }
    ]
  }
])

export default router