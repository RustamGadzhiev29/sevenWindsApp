import React from "react";
import styles from "./App.module.scss";
// import Header from './header/Header';
import { Breadcrumb, Layout, Menu, Table } from "antd";
import "./index.scss";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LayoutOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import TableApp from "./tableApp/TableApp";
import MenuApp from "./menuApp/MenuApp";
import HeaderApp from "./header/HeaderApp";

const { Content, Sider } = Layout;


const App: React.FC = () => (
  <Layout>
   <HeaderApp />
    <Layout>
      <Sider width={217.5}>
      <MenuApp />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 0,
            margin: 0,
            minHeight: 280,
          }}
        >
          <TableApp />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;


