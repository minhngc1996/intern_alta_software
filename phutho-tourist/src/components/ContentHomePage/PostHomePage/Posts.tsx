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
    <section className="postHomePage-section">
      <div className="postHomePage-header">
        <h3>CHIA SẺ THÔNG TIN</h3>
        <h2>Bài viết mới</h2>
        <hr style={{width:'130px', height:'6px', borderRadius:'100px', background: 'var(--blue-primary-600, #003F7D)'}}/>
        <p>Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</p>
      </div>
      <div className="postHomePage-container">
        {posts.map((post) => (
          <div key={post.id} className="postHomePage-card">
            <img src={post.image} alt={post.title} className="postHomePage-image " />
            <div className="postHomePage-content">
              <p className="admin">{post.admin} <span className="dot"></span></p>
              <h4 className="postHomePage-title">{post.title}</h4>
              <p className="postHomePage-description">{post.description}</p>
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="postHomePage-meta">
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
