import React, { useEffect } from 'react';
import './Introduce-Page.css';
import { useAppDispatch, useAppSelector } from '../../../features/hooks/hook';
import { fetchIntroduceImages } from '../../../features/aboutus/introduceSlice';

const Introduce = () => {
  const dispatch = useAppDispatch();
  const { images, status, error } = useAppSelector((state) => state.introduce);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchIntroduceImages());
    }
  }, [status, dispatch]);

  return (
    <section className="introduce">
      <div className="container">
        <header className="header">
          <h1>Giới thiệu về chúng tôi</h1>
        </header>
        <div className="content">
          <div className="header-image-wrapper">
            {status === 'loading' && <p>Loading images...</p>}
            {status === 'failed' && <p>Error loading images: {error}</p>}
            {status === 'succeeded' && images.header && (
              <img src={images.header} alt="About Us Header" className="header-image" />
            )}
          </div>
          <div className="text-content">
            <h2>Chúng tôi là ai?</h2>
            <div className="middle-image-wrapper">
              {status === 'succeeded' && images.middle && (
                <img src={images.middle} alt="About Us Middle" className="middle-image" />
              )}
            </div>
            <p>
              Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist) được thành lập từ năm 1989, trực thuộc UBND Quận 11. Ban đầu, Phuthotourist chỉ có sản phẩm duy nhất là khách sạn Phú Thọ. Do kinh doanh hiệu quả, Phuthotourist đã được UBND Quận 11 giao trọng trách phát triển thêm một số nhà hàng ẩm thực, và xây dựng CVVH Đầm Sen. Rồi đến Khách sạn Ngọc Lan (1992); Nhà hàng tiệc cưới Phong Lan (1996). Tiếp đến năm 1999, Phuthotourist đầu tư phát triển khu du lịch sinh thái Vàm Sát (nằm trong vùng đệm của khu dự trữ sinh quyển thế giới được Unesco công nhận, tại huyện Cần Giờ).
            </p>
            <p>
              Đến năm 2003, chính thức trở thành thành viên của Tổng công ty Du lịch Sài Gòn (Saigontourist). Năm 2006, Phuthotourist chuyển đổi mô hình hoạt động trở thành Công ty TNHH MTV DVDL Phú Thọ. Từ đây, Phuthotourist tiếp tục phát triển với các sản phẩm mới như Cà phê Vườn Đá (2009), nhà hàng 79 (2011), đi vào hoạt động Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza), và Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel) (2012).
            </p>
            <p>
              Bên cạnh việc tự điều hành quản lý, Phuthotourist còn liên kết đầu tư với khu giải trí nổi tiếng Công viên nước Đầm Sen.
            </p>
            <p>
              Và 10 năm sau về mái nhà chung Saigontourist, Phuthotourist chính thức bước sang trang mới với giai đoạn cổ phần hóa vào năm 2016. Tên gọi chính thức cho đến nay là Công ty Cổ phần DVDL Phú Thọ.
            </p>
            <h2>Tương lai</h2>
            <p>
              Hiện nay, một số dự án đã hoàn thành sứ mệnh. Phuthotourist không còn quản lý như nhà hàng Phong Lan, nhà hàng 79. Nhưng lại mở ra những dự án du lịch mới bằng cách bắt tay với nhiều nguồn lực khác nhau. Đặc biệt là các sự kiện hằng năm thu hút đông đảo người dân trong và ngoài thành phố đến tham dự tại CVVH Đầm Sen. Như những buổi bắn pháo hoa chào mừng lễ hội lớn của cả nước; Lễ hội áo dài; Lễ hội ẩm thực đất phương Nam, phối hợp với nhiều sở ban ngành trong thành phố tổ chức.
            </p>
            <p>
              Có thể nói Phuthotourist là một trong những đơn vị kinh doanh sản phẩm Du lịch đa dạng tại TP.HCM. Đã và đang phát triển, cũng như tiếp tục với nhiều dự án du lịch mở rộng tại các tỉnh thành. Hứa hẹn đem đến cho người dân những sản phẩm dịch vụ du lịch chất lượng hàng đầu trong cả nước.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduce;
