import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  FileDoneOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

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

const CustomSider = (props) => {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
};

export default CustomSider;
