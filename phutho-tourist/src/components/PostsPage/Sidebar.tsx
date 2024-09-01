import React, { useEffect } from 'react'
import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchPostsPage } from '../../features/postspage/postsPageSlice';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { postsPage, loading, error } = useSelector((state: RootState) => state.postsPage);

  useEffect(() => {
    dispatch(fetchPostsPage());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (postsPage.length === 0) return <p>No posts available</p>

  return (
    <aside className="sidebar-page" >
      <h2>Bài mới nhất</h2>
      {postsPage.map((post, index) => (
        <div key={index} className="postsPage-item" onClick={() => navigate(`/post/${post.id}`)}>
          <img src={post.image} alt={post.title} className="postsPage-image" />
          <div className="postsPage-info">
            <p className="postsPage-title">{post.title}</p>
            <div className="postsPage-meta">
              <span>{post.views}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
