import { Menu } from 'antd'
import React from 'react'
import './SidebarPost.css'
const SidebarPost = () => {
  return (
    <div className="sidebar">
      <p>CHỦ ĐỀ BÀI VIẾT</p>
      <Menu mode="vertical" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Giới thiệu</Menu.Item>
        <Menu.Item key="2">Tin tức</Menu.Item>
        <Menu.Item key="3">Sự kiện</Menu.Item>
        <Menu.Item key="4">Thông báo</Menu.Item>
        <Menu.Item key="5">Tin cổ đông</Menu.Item>
        <Menu.Item key="6">Hoạt động đoàn thể</Menu.Item>
      </Menu>
    </div>
  )
}

export default SidebarPost
