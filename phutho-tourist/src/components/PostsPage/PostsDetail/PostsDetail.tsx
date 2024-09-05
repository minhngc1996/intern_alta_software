import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchPostDetail, fetchPostsPage } from '../../../features/postspage/postsPageSlice';
import './PostsDetail.css';
import PostCard from '../PostCard';

interface PostsDetailProps {
  maxPosts?: number;
}

const PostsDetail: React.FC<PostsDetailProps> = ({ maxPosts = 4 }) => { 
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { postDetail, postsPage, loading, error } = useSelector((state: RootState) => state.postsPage);
  const pageSize = maxPosts; 

  useEffect(() => {
    if (id) {
      dispatch(fetchPostDetail(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchPostsPage());
  }, [dispatch]);

  const paginatedPosts = postsPage.slice(0, pageSize); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!postDetail) return <p>No post found</p>;

  return (
    <>
    <div className="post-detail">
      <h1>{postDetail.title}</h1>
      <img src={postDetail.image} alt={postDetail.title} />
      <p>{postDetail.content}</p> 
      <img className='img-post' src={postDetail.imagePostDetail} alt={postDetail.title} />

      <div className='post-related'>
        <h2>Bài viết liên quan</h2>
        <div className="post_content-grid">
          {paginatedPosts.map((post, index) => (
            <div key={index} className="post-card">
              <PostCard
                title={post.title}
                image={post.image}
                author={post.admin}
                views={post.views}
                date={post.date}
                categories={post.tags}
              />
    </div>
  ))}
</div>
      </div>
    </div>
    <div style={{height:'2000px'}}></div>
    </>
  );
};

export default PostsDetail;
