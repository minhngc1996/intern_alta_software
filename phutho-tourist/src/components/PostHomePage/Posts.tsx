import React from 'react'
import "./Posts.css"
const Posts = () => {
    const posts = [
        {
          id: 1,
          image: '/path/to/image1.jpg',
          title: 'Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor',
          description: 'Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh...',
          admin: 'Admin',
          date: '20/02/2022',
          views: '10N lượt xem',
          tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        },
        {
          id: 2,
          image: '/path/to/image2.jpg',
          title: 'Thông báo kết quả lựa chọn nhà cung cấp nước đá chế tác Bằng Đăng',
          description: 'Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các đơn vị tham gia chào giá cạnh tranh...',
          admin: 'Admin',
          date: '20/02/2022',
          views: '10N lượt xem',
          tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        },
        {
          id: 3,
          image: '/path/to/image3.jpg',
          title: 'Thông báo mời chào hàng cạnh tranh 2 màn hình Led P4 Outdoor Fullcolor',
          description: 'Công Ty Cổ Phần DỊCH VỤ DU LỊCH PHÚ THỌ thông báo mời chào hàng cạnh tranh lựa chọn đơn vị...',
          admin: 'Admin',
          date: '20/02/2022',
          views: '10N lượt xem',
          tags: ['Sự kiện', 'Thông báo', 'Tin tức'],
        },
      ];
  return (
    <section className="posts-section">
      <div className="header">
        <h3>CHIA SẺ THÔNG TIN</h3>
        <h2>Bài viết mới</h2>
        <p>Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</p>
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <p className="admin">{post.admin} <span className="dot"></span></p>
              <h4 className="post-title">{post.title}</h4>
              <p className="post-description">{post.description}</p>
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="post-meta">
                <span>{post.views}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn">Xem thêm bài viết</button>
    </section>
  )
}

export default Posts
