import React, { useEffect, useState } from "react";
import { Space, Table, Typography, Button, Popconfirm } from "antd";
import { getOrders, deleteOrder } from "../../API";
import "./Orders.css";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  const handleDelete = (orderID) => {
    setLoading(true);
    deleteOrder(orderID).then(() => {
      //Remove the deleted order from the data source 
      setDataSource((prevDataSource) =>
      prevDataSource.filter((order) => orderID.id !== orderID)
        );
           setLoading(false);   
    });
  };
  const columns = [
    {
      title: "Products",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => <span>₱{value}</span>,
    },
    {
      title: "Discounted Price",
      dataIndex: "discountedPrice",
      render: (value) => <span>₱{value}</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record.id)} className="button-primary">
  Edit
</Button>
          <Popconfirm
            title="Are you sure you want to delete this order?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="orders-container">
      <Space size={25} direction="vertical">
        <Typography.Title level={4}>Orders</Typography.Title>
        <Table
          loading={loading}
          columns={columns}         
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        />
      </Space>
    </div>
  );
};

export default Orders;