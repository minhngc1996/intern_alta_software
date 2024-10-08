import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Input, Button, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './JobList.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchRecruiment } from '../../features/recruitment/recruimentSlice';
import JobCard from './JobCard';

const fieldOptions = ['Hướng dẫn viên', 'Kinh doanh', 'Marketing', 'IT', 'Nhân Sự', 'Design'];
const locationOptions = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ'];
const jobTypeOptions = ['Toàn Thời Gian', 'Bán Thời Gian', 'Thực Tập Sinh', 'Freelancer'];

const JobList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recruiment, loading, error } = useSelector((state: RootState) => state.recruiment);
  const [searchText, setSearchText] = useState('');
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState(recruiment);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    dispatch(fetchRecruiment());
  }, [dispatch]);

  useEffect(() => {
    handleFilterChange();
  }, [searchText, selectedFields, selectedLocations, selectedJobTypes]);

  const handleFilterChange = () => {
    let filtered = recruiment;

    if (searchText) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchText.toLowerCase()) ||
        job.description.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedFields.length > 0) {
      filtered = filtered.filter(job =>
        job.field && selectedFields.includes(job.field)
      );
    }

    if (selectedLocations.length > 0) {
      filtered = filtered.filter(job =>
        selectedLocations.includes(job.location)
      );
    }

    if (selectedJobTypes.length > 0) {
      filtered = filtered.filter(job =>
        selectedJobTypes.includes(job.type)
      );
    }

    setFilteredJobs(filtered);
  };

  const toggleSelection = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const renderButtonGroup = (options: string[], selectedList: string[], setSelectedList: React.Dispatch<React.SetStateAction<string[]>>) => {
    return options.map(option => (
      <Button
        key={option}
        type={selectedList.includes(option) ? 'primary' : 'default'}
        onClick={() => toggleSelection(selectedList, setSelectedList, option)}
        className={`filter-group-button ${selectedList.includes(option) ? 'active' : ''}`}
      >
        {option}
      </Button>
    ));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedJobs = filteredJobs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="recruitment-page">
      <div className='title-container'>
        <h5>Tuyển dụng</h5>
      </div>
      <div className="recruitment-header">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
      <Row gutter={[16, 24]}>
        <Col xs={24} sm={24} md={8} lg={6} style={{ position: 'relative', flexShrink: 0 }}>
          <div className="filter-container">
            <Input
              placeholder="Tìm kiếm công việc..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              size="large"
            />

            <div className="filter-group-container">
              <h3>Lĩnh vực</h3>
              {renderButtonGroup(fieldOptions, selectedFields, setSelectedFields)}
            </div>

            <div className="filter-group-container">
              <h3>Địa điểm</h3>
              {renderButtonGroup(locationOptions, selectedLocations, setSelectedLocations)}
            </div>

            <div className="filter-group-container">
              <h3>Hình thức làm việc</h3>
              {renderButtonGroup(jobTypeOptions, selectedJobTypes, setSelectedJobTypes)}
            </div>
          </div>
        </Col>

        <Col xs={24} sm={24} md={16} lg={18}>
          <Row gutter={[16, 24]}>
            {paginatedJobs.map((job) => (
              <Col xs={24} sm={12} md={8} lg={8} key={job.id}>
                <div className="job-card-container"> 
                  <JobCard job={job} />
                </div>
              </Col>
            ))}
          </Row>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={filteredJobs.length}
            onChange={handlePageChange}
            className="pagination"
          />
        </Col>
      </Row>
    </div>
  );
};

export default JobList;
