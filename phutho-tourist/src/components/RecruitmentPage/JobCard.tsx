import React from 'react';
import { Card, Tag } from 'antd';
import { Job } from './types';
import recruitmentLogo from '../../assets/recruiment/recruiment_logo.png';
import './JobCard.css'; // Nhập file CSS

const { Meta } = Card;

interface JobCardProps {
  job: Job; 
  className?: string;
}
const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card hoverable className="job-card">
      <Meta
        title={
          <div className="job-card-header">
            <img src={recruitmentLogo} alt="Recruitment Logo" className="job-card-logo" />
            {job.title}
          </div>
        }
        description={
          <div className="job-card-meta">
            <div>
              <p><strong>Hình thức:</strong> {job.type}</p>
              <p><strong>Địa điểm:</strong> {job.location}</p>
              <p>{job.description}</p>
            </div>
            <Tag color={job.status === 'Đang tuyển' ? 'green' : 'red'} className="status-tag">{job.status}</Tag>
          </div>
        }
      />
      <div className="card-footer">
        <a href={`/recruitment/${job.id}`}>Xem chi tiết</a>
      </div>
    </Card>
  );
};

export default JobCard;
