import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import { ThemeProvite } from './components/context/ThemeContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvite>
      <RouterProvider router={router} />
    </ThemeProvite>
  </StrictMode>,
)
