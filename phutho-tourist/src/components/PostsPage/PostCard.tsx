import { Card, Tag } from 'antd';
import React from 'react';
import './PostCard.css';

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
    <Card hoverable className="postPageCard-card">
      <img src={image} alt={title} className="post-image" />
      <div className="postPageCard-content">
        <h3 className="postPageCard-title">{title}</h3>
        <p className="postPageCard-author">
          {author}
          <span className="status-indicator"></span> 
        </p>
        <div className="postPageCard-meta">
          <span>{views} lượt xem</span>
          <span>{date}</span>
        </div>
        <div className="postPageCard-categories">
          {categories.map((category, index) => (
            <Tag key={index} color="blue">{category}</Tag>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
