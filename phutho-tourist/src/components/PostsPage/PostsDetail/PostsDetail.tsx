import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchPostDetail } from '../../../features/postspage/postsPageSlice';
import './PostsDetail.css'

const PostsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { postDetail, loading, error } = useSelector((state: RootState) => state.postsPage);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostDetail(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    console.log('PostDetail data:', postDetail);
  }, [postDetail]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!postDetail) return <p>No post found</p>;
  console.log('Rendering PostDetail component');
  return (
    <>
      <div className="post-detail"  >
        <h1>{postDetail.title}</h1>
        <img src={postDetail.image} alt={postDetail.title} />
        <p>{postDetail.content}</p> 
        <img className='img-post' src={postDetail.imagePostDetail} alt={postDetail.title} />
      </div>
      <div style={{height:'1400px'}}></div>
    </>
  );
};

export default PostsDetail;
