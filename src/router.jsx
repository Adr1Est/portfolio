import { createBrowserRouter } from 'react-router'
import App from './App'
import Welcome from './pages/Welcome'
import Portfolio from './pages/Portfolio'
import Curriculum from './pages/Curriculum'
import StackAndButtons from './components/StackAndButtons'

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
        Component: Portfolio,
        children: [
          { index: true, Component: StackAndButtons },
          { path: "cv", Component: Curriculum },
        ]
      },
      {
        path:"/cv",
        Component: Curriculum
      }
    ]
  }
])

export default router