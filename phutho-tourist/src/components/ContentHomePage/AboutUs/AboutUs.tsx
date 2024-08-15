import React from 'react'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="content-container">
        <div className="text-content">
          <h3>VỀ CHÚNG TÔI</h3>
          <h2>Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</h2>
          <p>
            Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:
          </p>
          <ul>
            <li>Công viên Văn hóa Đầm Sen</li>
            <li>Khu du lịch sinh thái Vàm Sát</li>
            <li>Khách sạn Ngọc Lan</li>
            <li>Khách sạn Phú Thọ</li>
            <li>Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)</li>
            <li>Nhà hàng Thủy Tạ Đầm Sen</li>
            <li>Cà phê Vườn Đá</li>
            <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
            <li>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).</li>
          </ul>
          <button className="btn">Xem chi tiết</button>
        </div>
        <div className="image-content">
          <img src="../../assets/aboutus/aboutus1.png" alt="Đầm Sen Park" />
          <img src="../../assets/aboutus/aboutus2.png" alt="Đầm Sen Water Park" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
