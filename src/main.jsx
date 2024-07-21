import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CreatePost, { createPostAction } from './components/CreatePost';
import PostList from './components/PostList';

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/post-list', element: <PostList />, },
      { path: "/create-post", element: <CreatePost />, action: createPostAction }]
  },
  ,
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
