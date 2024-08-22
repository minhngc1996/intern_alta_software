import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';
import { Pagination } from 'antd';
import './PostList.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchPostsPage } from '../../features/postspage/postsPageSlice';

  const PostList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6; 
    const dispatch = useDispatch<AppDispatch>();
    const {postsPage, loading,error} = useSelector((state: RootState) => state.postsPage);
    useEffect(() => {
      dispatch(fetchPostsPage())
    },[dispatch])
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
    if(postsPage.length === 0 ) return <p>No posts Available</p>

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const paginatedPosts = postsPage.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
    return (
      <div className="postContent-list">
        <div className="postContent-grid">
          {paginatedPosts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              image={post.image}
              author={post.admin}
              views={post.views}
              date={post.date}
              categories={post.tags}
            />
          ))}
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={postsPage.length}
          onChange={handlePageChange}
          className="paginationPostList"
        />
      </div>
    );
  }

export default PostList
