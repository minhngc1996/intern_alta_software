import React, { useEffect, useState } from 'react';
import './MainSlider.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchPosts } from '../../features/homeposts/postsSlice';
import { fetchPostsPage } from '../../features/postspage/postsPageSlice';

const MainSlider = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { postsPage, loading, error } = useSelector((state: RootState) => state.postsPage);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    dispatch(fetchPostsPage());
  }, [dispatch]);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? postsPage.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === postsPage.length - 1 ? 0 : prev + 1));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (postsPage.length === 0) return <p>No posts available</p>;

  const currentPost = postsPage[currentSlide];
  const imageUrl = currentPost.image;

  return (
    <div className="main-slider">
      {postsPage.length > 0 && (
        <div className="slider-item">
          <img
            src={imageUrl}
            alt={currentPost.title}
            className="main-slider-image"
            onError={(e) => { e.currentTarget.src = 'fallback_image_url_here'; }} // Optional fallback image
          />
          <div className="slider-content">
            <h2 className="slider-title">{currentPost.title}</h2>
            <p className="slider-description">
              {currentPost.description}
            </p>
            <div className="slider-controls">
              <span className="control-button" onClick={handlePrevClick}>
                &lt;
              </span>
              <span className="control-button" onClick={handleNextClick}>
                &gt;
              </span>
            </div>
            <div className="slider-pagination">
              {postsPage.map((_, i) => (
                <span
                  key={i}
                  className={`pagination-dot ${i === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainSlider;
