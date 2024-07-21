// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useState } from 'react';
import './App.css'; // Custom CSS
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebars from '../components/Sidebars';
import CreatePost from '../components/CreatePost';
import PostList from '../components/PostList';
import PostListProvider from '../store/post-store';
import { Outlet } from 'react-router-dom';

function App() {
  const [selectedTab, setselectedTab] = useState("")


  return (
    <PostListProvider>
      <div className='App-Container'>
        <Sidebars selectedTab={selectedTab} setselectedTab={setselectedTab} />

        <div className='content'>
          <Header />
          {/* {selectedTab === 'Home' ? <PostList />
            : <CreatePost />
          } */}
          <Outlet></Outlet>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
