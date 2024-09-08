import React from 'react';
import { Input, DatePicker, Select } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import './SearchBar.css';
import { SearchOutlined } from '@ant-design/icons';
import searchBarIcon from '../../assets/searchbar/searchbar.png'
const { Search } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <Input
        placeholder="Tìm kiếm"
        size="large"
        className="search-bar-input"
        prefix={<SearchOutlined />}
      />
      <RangePicker
        size="large"
        suffixIcon={<img src={searchBarIcon} alt="calendar-icon" className="calendar-icon" />}
        className="date-picker"
      />
      <Select
        defaultValue="A đến Z"
        size="large"
        className="sort-select"
      >
        <Option value="asc">A đến Z</Option>
        <Option value="desc">Z đến A</Option>
      </Select>
    </div>
  );
}

export default SearchBar;
