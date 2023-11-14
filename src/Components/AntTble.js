import React, { useEffect, useState } from "react";
import { Table } from "antd";

function AntTble() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
 const [pageSize, setPageSize] = useState(5)

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "user ID",
      dataIndex: "userId",
      sorter:(record1,record2)=>{
        return record1.userId > record2.userId
      }
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "complete" : "In Progress"}</p>;
      },
      filters:[
        {text:"complete",value:true},
        {text:"In Progress", value:false}
      ],
      onFilter:(value,record)=>{
        return record.completed === value
      }
    },
  ];
  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current:page,
          pageSize:pageSize,
          onChange:(page,pageSize) =>{
            setPage(page);
            setPageSize(pageSize)
          }
        }}
      ></Table>
    </div>
  );
}

export default AntTble;
