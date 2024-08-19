import React from 'react';
import { Table, Input, Button, DatePicker, Space } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import './DocumentsTable.css';

interface DocumentData {
  key: string;
  stt: number;
  name: string;
  date: string;
  download: JSX.Element;
}

const { RangePicker } = DatePicker;

const data: DocumentData[] = [
  {
    key: '1',
    stt: 1,
    name: 'Khám phá Hội An - Việt Nam',
    date: '03/03/12 22:43',
    download: <DownloadOutlined />,
  },
  {
    key: '2',
    stt: 2,
    name: 'Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h',
    date: '03/03/12 22:43',
    download: <DownloadOutlined />,
  },
  // Add more rows as needed
];

const columns: ColumnsType<DocumentData> = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    width: '5%',
  },
  {
    title: 'Tên tài liệu',
    dataIndex: 'name',
    key: 'name',
    width: '50%',
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'date',
    key: 'date',
    width: '30%',
  },
  {
    title: 'Tải tài liệu',
    dataIndex: 'download',
    key: 'download',
    width: '15%',
    render: (text) => <Button icon={text} />,
  },
];

const DocumentsTable: React.FC = () => (
  <div className="documents-table-container">
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <RangePicker />
        <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
      </Space>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
    </Space>
  </div>
);

export default DocumentsTable;
