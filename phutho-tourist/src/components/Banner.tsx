import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Banner.css';
import { fetchBannerData } from '../features/banner/bannerThunks';
import { setSelectedImageIndex } from '../features/banner/bannerSlice';
import { AppDispatch, RootState } from '../store/store';



const Banner: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { bannerVideoUrl, imageUrls, selectedImageIndex, status } = useSelector(
    (state: RootState) => state.banner
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBannerData());
    }
  }, [status, dispatch]);

  const handleClick = (index: number) => {
    dispatch(setSelectedImageIndex(index));
  };

  return (
    <div className="banner-container">
      {bannerVideoUrl ? (
        <video
          src={bannerVideoUrl}
          autoPlay
          loop
          muted
          className="banner-video"
        />
      ) : (
        <p>Loading video...</p>
      )}   
    </div>
  );
};

export default Banner;
