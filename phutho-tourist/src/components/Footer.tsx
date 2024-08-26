    import React from 'react'
    import '../styles/Footer.css'
    import logo from '../assets/logo.png'
    const Footer = () => {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <div className="footer-logo-container">
                            <img src={logo} alt="logoPhuThoTourist" className="footer-logo" />
                            <div className="footer-text-container">
                                <h2 className="footer-company-name">CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</h2>
                                <h3 className="footer-brand-name">PHUTHOTOURIST</h3>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p className="footer-copyright">
                                Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
                            </p>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-title">LIÊN HỆ</h4>
                        <p className="footer-text">15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM</p>
                        <p className="footer-text">02838650921</p>
                        <a href="mailto:vanphong@damsenpark.vn" className="footer-link">vanphong@damsenpark.vn</a>
                        <a href="https://www.facebook.com/Phuthotourist" className="footer-link">Phuthotourist</a>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-title">CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST</h4>
                        <ul className="footer-list">
                            <li className="footer-list-item">Công viên Văn hóa Đầm Sen</li>
                            <li className="footer-list-item">Khu du lịch sinh thái Vàm Sát</li>
                            <li className="footer-list-item">Khách sạn Ngọc Lan (Quận 1)</li>
                            <li className="footer-list-item">Khách sạn Phú Thọ (Quận 11)</li>
                            <li className="footer-list-item">Trung tâm Du lịch Đầm Sen</li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
        }

    export default Footer
