import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store"; 
import { Navigate, useNavigate } from "react-router-dom";
import "./Posts.css";
import { fetchPosts } from "../../../features/homeposts/postsSlice";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { posts, loading, error } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="posts-section">
      <div className="header">
        <h3>CHIA SẺ THÔNG TIN</h3>
        <h2>Bài viết mới</h2>
        <p>Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</p>
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <p className="admin">{post.admin} <span className="dot"></span></p>
              <h4 className="post-title">{post.title}</h4>
              <p className="post-description">{post.description}</p>
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="post-meta">
                <span>{post.views}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-postHomepage" onClick={() => navigate('/posts')}>Xem thêm bài viết</button>
    </section>
  );
};

export default Posts;
