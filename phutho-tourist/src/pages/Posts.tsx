import React from 'react'
import MainSlider from '../components/PostsPage/MainSlider'
import Sidebar from '../components/PostsPage/Sidebar'
import '../styles/Posts.css'
import PostList from '../components/PostsPage/PostList'
import SidebarPost from '../components/PostsPage/SidebarPost'
import Banner from '../components/Banner'
import SearchBar from '../components/PostsPage/SearchBar'
const Posts = () => {
  return (
    <>
      <div className='post-container'>
        <div className='title-page'>
          <h5>Bài Viết</h5>
        </div>
        <div className='content-wrapper'>
          <MainSlider />
          <Sidebar />
        </div>
        <div className='content-wrapper-post'>
          <SidebarPost />
          <div>
          <SearchBar />
          <PostList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts
