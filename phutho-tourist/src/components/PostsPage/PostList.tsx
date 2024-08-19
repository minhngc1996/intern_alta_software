import React, { useState } from 'react'
import PostCard from './PostCard';
import { Pagination } from 'antd';
import './PostList.css'

const postsData = [
    {
      title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
      image: "path_to_image1",
      author: "Admin",
      views: "10k",
      date: "20/02/2022",
      categories: ["Sự kiện", "Thông báo"],
    },
    {
        title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
        image: "path_to_image1",
        author: "Admin",
        views: "10k",
        date: "20/02/2022",
        categories: ["Sự kiện", "Thông báo"],
      },{
        title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
        image: "path_to_image1",
        author: "Admin",
        views: "10k",
        date: "20/02/2022",
        categories: ["Sự kiện", "Thông báo"],
      },{
        title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
        image: "path_to_image1",
        author: "Admin",
        views: "10k",
        date: "20/02/2022",
        categories: ["Sự kiện", "Thông báo"],
      },{
        title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
        image: "path_to_image1",
        author: "Admin",
        views: "10k",
        date: "20/02/2022",
        categories: ["Sự kiện", "Thông báo"],
      },{
        title: "Thông báo đấu giá giữ xe tại CVVH Đầm Sen",
        image: "path_to_image1",
        author: "Admin",
        views: "10k",
        date: "20/02/2022",
        categories: ["Sự kiện", "Thông báo"],
      },
  ];
  const PostList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8; // Number of posts per page
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const paginatedPosts = postsData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
    return (
      <div className="post-list">
        <div className="post-grid">
          {paginatedPosts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              image={post.image}
              author={post.author}
              views={post.views}
              date={post.date}
              categories={post.categories}
            />
          ))}
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={postsData.length}
          onChange={handlePageChange}
          className="pagination"
        />
      </div>
    );
  }

export default PostList
