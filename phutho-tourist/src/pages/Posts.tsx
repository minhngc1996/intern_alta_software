import React from 'react'
import MainSlider from '../components/PostsPage/MainSlider'
import Sidebar from '../components/PostsPage/Sidebar'
import '../styles/Posts.css'
import PostList from '../components/PostsPage/PostList'
import SidebarPost from '../components/PostsPage/SidebarPost'
const Posts = () => {
  return (
    <>
      <div className='content-wrapper'>
        <MainSlider />
        <Sidebar />
      </div>
      <div className='content-wrapper-post'>
        <SidebarPost />
        <PostList />
      </div>

    </>
  )
}

export default Posts
