import { Card, Tag } from 'antd';
import React from 'react'
import './PostCard.css'


interface PostCardProps {
    title: string;
    image: string;
    author: string;
    views: string;
    date: string;
    categories: string[];
  }


  const PostCard: React.FC<PostCardProps> = ({ title, image, author, views, date, categories }) => {
    return (
      <Card hoverable className="post-card">
        <img src={image} alt={title} className="post-image" />
        <div className="post-content">
          <h3 className="post-title">{title}</h3>
          <p className="post-author">{author}</p>
          <div className="post-meta">
            <span>{views} lượt xem</span>
            <span>{date}</span>
          </div>
          <div className="post-categories">
            {categories.map((category, index) => (
              <Tag key={index} color="blue">{category}</Tag>
            ))}
          </div>
        </div>
      </Card>
    );
  }
export default PostCard
