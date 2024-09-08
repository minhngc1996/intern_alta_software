import { Menu } from 'antd'
import React from 'react'
import './SidebarPost.css'
import introduceIcon from '../../assets/icon_slider/introduce-icon.png'
import newsIcon from '../../assets/icon_slider/news-icon.png'
import eventIcon from '../../assets/icon_slider/event-icon.png'
import noficationIcon from '../../assets/icon_slider/nofication-icon.png'
import postIcon from '../../assets/icon_slider/post-icon.png'
import activityIcon from '../../assets/icon_slider/activity-icon.png'

const SidebarPost = () => {
  return (
    <div className="sidebar-post">
      <h4 className="sidebar-post__title">CHỦ ĐỀ BÀI VIẾT</h4>
      <Menu mode="vertical" defaultSelectedKeys={['1']} className="sidebar-post__menu">
        <Menu.Item key="1" icon={<img src={introduceIcon} alt="Giới thiệu" className="sidebar-post__icon"/>}>Giới thiệu</Menu.Item>
        <Menu.Item key="2" icon={<img src={newsIcon} alt="Tin tức" className="sidebar-post__icon"/>}>Tin tức</Menu.Item>
        <Menu.Item key="3" icon={<img src={eventIcon} alt="Sự kiện" className="sidebar-post__icon"/>}>Sự kiện</Menu.Item>
        <Menu.Item key="4" icon={<img src={noficationIcon} alt="Thông báo" className="sidebar-post__icon"/>}>Thông báo</Menu.Item>
        <Menu.Item key="5" icon={<img src={postIcon} alt="Tin cổ đông" className="sidebar-post__icon"/>}>Tin cổ đông</Menu.Item>
        <Menu.Item key="6" icon={<img src={activityIcon} alt="Hoạt động đoàn thể" className="sidebar-post__icon"/>}>Hoạt động đoàn thể</Menu.Item>
      </Menu>
    </div>
  )
}

export default SidebarPost
