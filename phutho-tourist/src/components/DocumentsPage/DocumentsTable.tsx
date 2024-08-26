import React, { useEffect } from 'react';
import { Table, Input, Button, DatePicker, Space } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import './DocumentsTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchDocumentsTable } from '../../features/documentsPage/documentsTable/documentsTableSlice';

interface DocumentData {
  id: string; 
  name: string;
  date: string;
  url: string;
}

const { RangePicker } = DatePicker;

const columns: ColumnsType<DocumentData> = [
  {
    title: 'STT',
    key: 'stt',
    width: '5%',
    render: (_: any, __: any, index: number) => index + 1, 
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
    dataIndex: 'url',
    key: 'download',
    width: '15%',
    render: (url: string) => (
      <a href={url} download>
        <Button icon={<DownloadOutlined />} />
      </a>
    ),
  },
];

const DocumentsTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { documentsTable, loading, error } = useSelector((state: RootState) => state.documentsTable);

  useEffect(() => {
    dispatch(fetchDocumentsTable());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="documents-table-container">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RangePicker />
          <Input placeholder="Tìm kiếm" prefix={<SearchOutlined />} />
        </Space>
        <Table columns={columns} dataSource={documentsTable} pagination={{ pageSize: 5 }} />
      </Space>
    </div>
  );
};

export default DocumentsTable;
