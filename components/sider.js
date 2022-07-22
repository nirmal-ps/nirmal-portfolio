import React, { useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  FileDoneOutlined,
  ContactsOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

const items = [
  { icon: HomeOutlined, label: "Home" },
  { icon: UserOutlined, label: "About" },
  { icon: FileDoneOutlined, label: "Resume" },
  { icon: ContactsOutlined, label: "Contact" },
].map(({ icon, label }, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label,
}));

const CustomSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ position: "fixed" }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          position: "absolute",
          bottom: 5,
          left: 10,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        style={{
          height: "100vh",
          width: collapsed ? 57 : 300,
        }}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default CustomSider;
