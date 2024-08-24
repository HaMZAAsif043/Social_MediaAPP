import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost, { createPostAction } from './components/CreatePost';
import PostList from './components/PostList';

// Define your base URL here
const basename = '/Social_MediaAPP';

// You can use a custom base URL in the routes
const router = createBrowserRouter([
  {
    path: `${basename}/`, element: <App />, children: [
      { path: `${basename}/post-list`, element: <PostList /> },
      { path: `${basename}/create-post`, element: <CreatePost />, action: createPostAction }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
