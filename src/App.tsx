import React from "react";
import styles from "./App.module.scss";
// import Header from './header/Header';
import { Layout } from "antd";
import "./index.scss";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LayoutOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import MenuApp from "./components/menuApp/MenuApp";
import HeaderApp from "./components/header/HeaderApp";
import Table from "./components/table/Table";

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
            height: 100,

          }}
        >
          <Table />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;


