import React from 'react'
import './MainSlider.css'
const MainSlider = () => {
  return (
    <div className="main-slider">
      <img src="path_to_your_image" alt="Main Slider" className="main-slider-image" />
      <div className="slider-content">
        <h2 className="slider-title">Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng</h2>
        <p className="slider-description">
          Thông báo mời chào giá cạnh tranh công ty cổ phần dịch vụ du lịch Phú Thọ tổ chức chào giá cạnh tranh lựa chọn đơn vị cung cấp nước đá để chế tác Băng Đăng tại Công viên Văn hóa Đầm Sen.
        </p>
        <div className="slider-controls">
          <span className="control-button">&lt;</span>
          <span className="control-button">&gt;</span>
        </div>
        <div className="slider-pagination">
          <span className="pagination-dot active"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
        </div>
      </div>
    </div>
  )
}

export default MainSlider
