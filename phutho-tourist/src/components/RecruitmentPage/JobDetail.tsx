// JobDetail.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { fetchRecruimentDetail } from '../../features/recruitment/recruimentSlice';
import { Card, Descriptions, Tag, Spin, Form, Input, Radio, Button, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './JobDetail.css'
const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Lấy ID từ URL
  const dispatch = useDispatch<AppDispatch>();
  const { selectedRecruiment, loading, error } = useSelector((state: RootState) => state.recruiment);

  useEffect(() => {
    if (id) {
      dispatch(fetchRecruimentDetail(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!selectedRecruiment) {
    return <p>No job details available</p>;
  }

  const onFinish = (values: any) => {
    console.log('Form Values: ', values);
  };

  return (
    <>
      <div className="job-detail-page">
      {/* Card Chi tiết tuyển dụng */}
      <Card
        hoverable
        cover={
          <div className="card-image-container">
            <img alt="job" src={selectedRecruiment.image} className="card-image" />
          </div>
        }
        title={selectedRecruiment.title}
        style={{ marginBottom: '20px' }}
      >
        <Descriptions bordered column={1} size="middle">
        <h2>Chi tiết tuyển dụng</h2>
          <Descriptions.Item label="Vị trí">{selectedRecruiment.title}</Descriptions.Item>
          <Descriptions.Item label="Số lượng">{selectedRecruiment.quantity}</Descriptions.Item>
          <Descriptions.Item label="Nơi làm việc">{selectedRecruiment.company}</Descriptions.Item>
          <Descriptions.Item label="Địa chỉ làm việc">{selectedRecruiment.address}</Descriptions.Item>
          <Descriptions.Item label="Mô tả công việc">{selectedRecruiment.jobDescription}</Descriptions.Item>
          <Descriptions.Item label="Ngày làm việc">{selectedRecruiment.workingDays}</Descriptions.Item>
          <Descriptions.Item label="Giờ làm việc">{selectedRecruiment.workingTimes}</Descriptions.Item>
          <Descriptions.Item label="Quyền lợi">{selectedRecruiment.benefits}</Descriptions.Item>
          <Descriptions.Item label="Yêu cầu">{selectedRecruiment.requirements}</Descriptions.Item>
          <Descriptions.Item label="Độ tuổi">{selectedRecruiment.ageRequirement}</Descriptions.Item>
          <Descriptions.Item label="Trình độ">{selectedRecruiment.educationLevel}</Descriptions.Item>
          <Descriptions.Item label="Hồ sơ gửi">{selectedRecruiment.applicationInstructions}</Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Form Nộp Hồ Sơ */}
      <Card
        hoverable
        title={<h2>Form Nộp Hồ Sơ</h2>}
        style={{ marginBottom: '20px' }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            {/* Cột Trái */}
            <Col span={12}>
              <Form.Item label="Họ tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}>
                <Input placeholder="Nguyen Van A" />
              </Form.Item>

              <Form.Item label="Năm sinh" name="birthdate" rules={[{ required: true, message: 'Vui lòng nhập năm sinh!' }]}>
                <Input placeholder="12-12-2000" />
              </Form.Item>

              <Form.Item label="Nơi ở hiện nay" name="currentAddress" rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}>
                <Input placeholder="123 Âu Cơ, Phường 9, Tân Bình, TP HCM" />
              </Form.Item>

              <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}>
                <Input placeholder="nguyenvana@gmail.com" />
              </Form.Item>

              <Form.Item label="Trình độ" name="education">
                <Input placeholder="Đại học" />
              </Form.Item>

              <Form.Item label="Bạn có sẵn sàng đi công tác dài ngày?" name="workAvailability">
                <Radio.Group>
                  <Radio value="Có">Có</Radio>
                  <Radio value="Tùy thời điểm">Tùy thời điểm</Radio>
                  <Radio value="Không">Không</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="Những nơi đã từng làm việc trước đây (ghi rõ vị trí)" name="previousWork">
                <Input placeholder="Những nơi đã từng làm việc trước đây" />
              </Form.Item>

              <Form.Item label="Kinh nghiệm bản thân" name="experience">
                <Input.TextArea rows={4} placeholder="Kinh nghiệm bản thân" />
              </Form.Item>
            </Col>

            {/* Cột Phải */}
            <Col span={12}>
              <Form.Item label="Giới tính" name="gender">
                <Radio.Group>
                  <Radio value="Nam">Nam</Radio>
                  <Radio value="Nữ">Nữ</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="Nơi sinh" name="birthplace">
                <Input placeholder="Phường 6, Quận Tân Bình, TP HCM" />
              </Form.Item>

              <Form.Item label="Điện thoại" name="phone">
                <Input addonBefore="+84" placeholder="0123456789" />
              </Form.Item>

              <Form.Item label="Facebook cá nhân" name="facebook">
                <Input placeholder="facebook.com.vn" />
              </Form.Item>

              <Form.Item label="Đính kèm CV" name="cv">
                <Upload>
                  <Button icon={<UploadOutlined />}>Chọn tệp</Button>
                </Upload>
              </Form.Item>

              <Form.Item label="Bạn có sẵn sàng làm thêm giờ?" name="overtimeAvailability">
                <Radio.Group>
                  <Radio value="Có">Có</Radio>
                  <Radio value="Tùy thời điểm">Tùy thời điểm</Radio>
                  <Radio value="Không">Không</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gửi ngay
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
    <div style={{height:'1400px'}}></div>
    </>
  );
};

export default JobDetail;
