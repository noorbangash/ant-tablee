import { Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import React from "react";

function Tble() {
  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render:(tag)=>{
        const color=tag.includes('A')?"Green":tag.includes('B')?'blue':'red'
        return  <Tag color={color} key={tag}>
            {tag}
        </Tag>
      }
    },
  ];
  const dataSource=[
    {
      key:"1",
      id:1,
      name:"Student Name 1",
      grade:"A+"
    },
    {
        key:"2",
        id:2,
        name:"Student Name 2",
        grade:"B"
      },
      {
        key:"3",
        id:3,
        name:"Student Name 3",
        grade:"B+"
      },
      {
        key:"4",
        id:4,
        name:"Student Name 4",
        grade:"C"
      },
      {
        key:"5",
        id:5,
        name:"Student Name 5",
        grade:"A"
      }
]
  return <div>
    <Table 
    columns={columns}
    dataSource={dataSource}
    >

    </Table>
  </div>;
}

export default Tble;
