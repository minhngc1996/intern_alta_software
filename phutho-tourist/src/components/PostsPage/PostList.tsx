import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { Pagination } from 'antd';
import './PostList.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchPostsPage } from '../../features/postspage/postsPageSlice';
import { Link } from 'react-router-dom';

interface PostListProps {
  maxPosts?: number;
}

const PostList: React.FC<PostListProps> = ({ maxPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = maxPosts || 6;
  const dispatch = useDispatch<AppDispatch>();
  const { postsPage, loading, error } = useSelector((state: RootState) => state.postsPage);

  useEffect(() => {
    dispatch(fetchPostsPage());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (postsPage.length === 0) return <p>No posts available</p>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedPosts = postsPage.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="post-list-container">
      <div className="post-grid">
        {paginatedPosts.map((post, index) => (
          <Link key={index} to={`/post/${post.id}`} className="post-card-link"> 
            <PostCard
              title={post.title}
              image={post.image}
              author={post.admin}
              categories={post.tags}
              views={post.views}
              date={post.date}
            />
          </Link>
        ))}
      </div>
      {maxPosts === undefined && (
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={postsPage.length}
          onChange={handlePageChange}
          className="pagination-custom"
        />
      )}
    </div>
  );
};

export default PostList;
