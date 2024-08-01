import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Login, Signup, UserProfile, EditorDashboard, ContributorDashboard, SearchResult, RecipePage } from './pages/indexPages.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/profile",
        element: <UserProfile />
      },
      {
        path: "/editorDashboard",
        element: <EditorDashboard />
      },
      {
        path: "/contributorDashboard",
        element: <ContributorDashboard />
      },
      {
        path: "/searchResult",
        element: <SearchResult />
      },
      {
        path: "/recipePage",
        element: <RecipePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider> */}
      <RouterProvider router={router}/>
    {/* </Provider> */}
  </React.StrictMode>,
)
