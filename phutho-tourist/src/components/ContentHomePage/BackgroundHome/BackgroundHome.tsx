import React, { useEffect } from 'react';
import { AppDispatch, RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBannerData } from '../../../features/banner/bannerThunks';
import { setSelectedImageIndex } from '../../../features/banner/bannerSlice';
import './BgHome.css'
const imageTitles = [
  'Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022',
  'Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022',
  'Hơn 1000 bánh chưng lộc cho khách dâng hương vtượng vua Hùng tại Đầm Sen',
  'Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022',
  'Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022',
];

const BackgroundHome = () => {
  const dispatch: AppDispatch = useDispatch();
  const { imageUrls, selectedImageIndex, status } = useSelector(
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
    <div className="background-home">
      <div className="carousel-header">
        <h5>CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</h5>
        <h2>PHUTHOTOURIST</h2>
        <p>Ngày thành lập 01/01/2019</p>
      </div>
      {imageUrls.length > 0 ? (
        <div className="carousel-container">
          {imageUrls.map((url, index) => {
            const isSelected = index === selectedImageIndex;
            const isPrev = index === (selectedImageIndex - 1 + imageUrls.length) % imageUrls.length;
            const isNext = index === (selectedImageIndex + 1) % imageUrls.length;

            return (
              <div
                key={index}
                className={`carousel-image ${
                  isSelected ? 'selected' : isPrev || isNext ? 'nearby' : 'dimmed'
                }`}
                onClick={() => handleClick(index)}
              >
                <img
                  src={url}
                  alt={`Banner ${index}`}
                  className="carousel-image-content"
                />
                <div className="image-overlay">
                  {imageTitles[index]}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default BackgroundHome;
