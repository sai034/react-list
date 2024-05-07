import React from "react";

import { Table } from 'antd'

function StudentsTable({studentsData})
{
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Course',
          dataIndex: 'course',
          key: 'course',
        },
        {
          title: 'Marks',
          dataIndex: 'marks',
          key: 'marks',
        },
        {
          title: 'Grade',
          dataIndex: 'grade',
          key: 'grade',
        },
      ];
      return (
        <Table dataSource={studentsData} columns={columns} />
      )
}
export default StudentsTable;