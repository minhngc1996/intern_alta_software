import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AboutUs.css';
import { fetchAboutUsImages } from '../../../features/aboutus/aboutUsSlice';
import { useAppDispatch, useAppSelector } from '../../../features/hooks/hook';

const AboutUs = () => {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.aboutUs.images);
  const status = useAppSelector((state) => state.aboutUs.status);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAboutUsImages());
    }
  }, [status, dispatch]);

  const handleButtonClick = () => {
    navigate('/gioi-thieu'); // Navigate to /gioi-thieu when button is clicked
  };

  return (
    <section className="about-us">
      <div className="content-container">
        <div className="text-content">
          <h3>VỀ CHÚNG TÔI</h3>
          <h2>Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</h2>
          <div className='post-about'>
            <p>
              Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist...
            </p>
            <ul>
                <li>Công viên Văn hóa Đầm Sen</li>
                <li>Khu du lịch sinh thái Vàm Sát</li>
                <li>Khách sạn Ngọc Lan</li>
                <li>Khách sạn Phú Thọ</li>
                <li>Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza) </li>
                <li>Nhà hàng Thủy Tạ Đầm Sen </li>
                <li>Cà phê Vườn Đá</li>
                <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel) </li>
                <li>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park)</li>
            </ul>
          </div>
          <button className="btn-about" onClick={handleButtonClick}>Xem chi tiết</button>
        </div>
        <div className="image-content">
          {images.length > 0 && (
            <>
              <img src={images[0]} alt="Đầm Sen Park" className="image-1"/>
              <img src={images[1]} alt="Đầm Sen Water Park"  className="image-2"/>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
