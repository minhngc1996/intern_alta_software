import React, { useEffect, useState } from 'react';
import './MainSlider.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
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
            onError={(e) => { e.currentTarget.src = 'fallback_image_url_here'; }}
          />
          <div className="slider-content">
            <div className="slider-header">
              <h2 className="slider-title">{currentPost.title}</h2>
              <div className="slider-controls">
                <button className="control-button prev-button" aria-label="Previous" onClick={handlePrevClick}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/phutho-tourist-e9654.appspot.com/o/next_prev_icon%2Fprev_icon.png?alt=media&token=d188142f-492a-406b-a358-8d22f02d1b48" alt="Previous" />
                </button>
                <button className="control-button next-button" aria-label="Next" onClick={handleNextClick}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/phutho-tourist-e9654.appspot.com/o/next_prev_icon%2Fnext_icon.png?alt=media&token=d67f1679-683f-4eeb-9e01-f2ae7cb26bf2" alt="Next" />
                </button>
              </div>
            </div>
            <p className="slider-description">
              {currentPost.description}
            </p>
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
