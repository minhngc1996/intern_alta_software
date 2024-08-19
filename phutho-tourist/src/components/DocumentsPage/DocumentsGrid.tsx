import React from 'react';
import { Card, Col, Row } from 'antd';
import './DocumentsGrid.css';
import logo_document from '../../assets/documents/logo_files.png';
import bg1 from '../../assets/documents/bg1.png';
import bg2 from '../../assets/documents/bg2.png';
import bg3 from '../../assets/documents/bg3.png';
import bg4 from '../../assets/documents/bg4.png';
import bg5 from '../../assets/documents/bg5.png';
import bg6 from '../../assets/documents/bg6.png';
import bg7 from '../../assets/documents/bg7.png';
import bg8 from '../../assets/documents/bg8.png';

const { Meta } = Card;

const documents = [
  { id: 1, title: 'Báo cáo Tài Chính năm 2022-2023', img: logo_document, bg: bg1 },
  { id: 2, title: 'Báo cáo Tài Chính năm 2022-2023', img: logo_document, bg: bg2  },
  { id: 3, title: 'Báo cáo Tài Chính năm 2022-2023', img: logo_document, bg: bg3  },
  { id: 4, title: 'Báo cáo Tài Chính năm 2022-2023', img: logo_document, bg: bg4  },
  { id: 5, title: 'Báo cáo Tài Chính năm 2022-2023', img: logo_document, bg: bg5  },
  { id: 6, title: 'Báo cáo Tài Chính năm 2022-2023', img: logo_document, bg: bg6  },
  { id: 7, title: 'Báo cáo Tài Chính năm 2022-2023', img: logo_document, bg: bg7  },
  { id: 8, title: 'Báo cáo Tài Chính năm 2022-2023', img: logo_document, bg: bg8  },
];

const DocumentsGrid: React.FC = () => (
  <div className="documents-container">
    <h2 className="title">TÀI LIỆU</h2>
    <Row gutter={[16, 16]}>
      {documents.map(doc => (
        <Col xs={24} sm={12} md={8} lg={6} key={doc.id}>
          <Card
            hoverable
            cover={<img width={'100%'} alt={doc.title} src={doc.img} />}
            className="document-card"
            style={{ 
              backgroundImage: `url(${doc.bg})`,
              backgroundSize: 'cover', // Để ảnh nền phủ kín card
              backgroundPosition: 'center' // Căn giữa ảnh nền
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
);

export default DocumentsGrid;
