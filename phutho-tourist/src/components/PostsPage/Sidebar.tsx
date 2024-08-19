import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    const posts = [
        {
          title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
          views: "10k views",
          date: "20/02/2022",
          image: "path_to_image1"
        },
        {
            title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
            views: "10k views",
            date: "20/02/2022",
            image: "path_to_image1"
          },
          {
            title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
            views: "10k views",
            date: "20/02/2022",
            image: "path_to_image1"
          },{
            title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
            views: "10k views",
            date: "20/02/2022",
            image: "path_to_image1"
          },{
            title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
            views: "10k views",
            date: "20/02/2022",
            image: "path_to_image1"
          },
          {
            title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
            views: "10k views",
            date: "20/02/2022",
            image: "path_to_image1"
          },{
            title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
            views: "10k views",
            date: "20/02/2022",
            image: "path_to_image1"
          },
          {
            title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
            views: "10k views",
            date: "20/02/2022",
            image: "path_to_image1"
          },
      ];
    
      return (
        <aside className="sidebar">
          <h2>Bài mới nhất</h2>
          {posts.map((post, index) => (
            <div key={index} className="post-item">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-info">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  <span>{post.views}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </aside>
      );
}

export default Sidebar
