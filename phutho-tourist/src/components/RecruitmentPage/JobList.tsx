import React from 'react';
import { Card, Col, Row, Tag, Pagination, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './JobList.css'

const { Meta } = Card;

const jobData = [
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '1',
  },
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '2',
  },
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '3',
  },
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '4',
  },
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '5',
  },
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '6',
  },
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '7',
  },
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '8',
  },
  {
    title: 'Nhân viên thiết kế đồ họa',
    type: 'Nhân viên chính thức',
    location: 'CV/VH Đầm Sen',
    status: 'Đang tuyển',
    description: 'Trung tâm du lịch văn hóa Đầm Sen cần tuyển 2 Nhân viên...',
    id: '9',
  },
];

const JobList: React.FC = () => {
  return (
    <div className="recruitment-page">
      <div className="recruitment-header">
        <h2>Tuyển Dụng</h2>
      </div>
      <Row gutter={16}>
        <Col span={6}>
          <div className="search-filter">
            <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
            <div className="filter-section">
              <h3>Lĩnh vực</h3>
              <ul>
                <li>Hướng dẫn viên</li>
                <li>Kinh doanh</li>
                {/* Add more items as needed */}
              </ul>
            </div>
            {/* Add more filter sections here */}
          </div>
        </Col>
        <Col span={18}>
          <Row gutter={[16, 16]}>
            {jobData.map(job => (
              <Col span={8} key={job.id}>
                <Card hoverable>
                  <Meta
                    title={job.title}
                    description={
                      <>
                        <p>{job.type}</p>
                        <p>{job.location}</p>
                        <p>{job.description}</p>
                      </>
                    }
                  />
                  <div className="card-footer">
                    <Tag color={job.status === 'Đang tuyển' ? 'green' : 'red'}>{job.status}</Tag>
                    <a href="#">Xem chi tiết</a>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination defaultCurrent={1} total={50} />
        </Col>
      </Row>
    </div>
  );
};

export default JobList;
