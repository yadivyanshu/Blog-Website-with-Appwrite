import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AddPost, AllPost, AuthLayout, Login, Signup } from './components/index.js'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
// import { AuthLayout } from './components/index.js'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path : '/',
          element: <Home />
        },
        {
          path: '/login',
          element: (
            <AuthLayout  authentication = {false} >
              <Login />

            </AuthLayout>
          )
        },
        {
          path: '/signup',
          element: (
            <AuthLayout  authentication = {false} >
              <Signup />

            </AuthLayout>
          )
        },
          {
          path: '/all-post',
          element: (
            <AuthLayout  authentication >
              {" "}
              <AllPost />

            </AuthLayout>
          )
        },
        {
          path: '/add-post',
          element: (
            <AuthLayout  authentication  >
              {" "}
              <AddPost />

            </AuthLayout>
          )
        },
        {
          path: '/edit-post/:slug',
          element: (
            <AuthLayout  authentication = {false} >
              {" "}
              <EditPost />

            </AuthLayout>
          )
        },
        {
          path: '/post/:slug',
          element: <Post />
        }

      ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store} >

    {/* <App /> */}
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
