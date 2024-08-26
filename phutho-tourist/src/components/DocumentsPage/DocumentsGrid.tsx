import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import './DocumentsGrid.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchDocumentsGrid } from '../../features/documentsPage/documentsGrid/documentsGridSlice';


const { Meta } = Card;


const DocumentsGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { documentsGrid, loading, error } = useSelector((state: RootState) => state.documentsGrid);

  useEffect(() => {
    dispatch(fetchDocumentsGrid());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="documents-container">
      <div className='title-container '>
        <h5>Tài liệu</h5>
      </div>
    <Row gutter={[16, 16]}>
      {documentsGrid.map(doc => (
        <Col xs={24} sm={12} md={8} lg={6} key={doc.id}>
          <Card
          hoverable
          cover={
            <div className="document-img-container">
              <img className="document-img" alt={doc.title} src={doc.img} />
            </div>
          }
          className="document-card"
          style={{ 
            backgroundImage: `url(${doc.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
          }}
        >
          <Meta
            title={<span className="document-title">{doc.title}</span>}
            className="card-meta"
          />
        </Card>
        </Col>
      ))}
    </Row>
  </div>
)};

export default DocumentsGrid;
