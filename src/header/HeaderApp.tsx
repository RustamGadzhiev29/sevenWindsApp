import React, { FC } from "react";
import { Tabs } from "antd";
import { CaretLeftOutlined, MenuOutlined } from "@ant-design/icons";
import style from "./HeaderApp.module.scss";
import { Header } from "antd/es/layout/layout";

// const { TabPane } = Tabs;

const items = [
  {
    label: "Просмотр",
    key: "view",
  },
  {
    label: "Управление",
    key: "manage",
  },
];
const HeaderApp: FC = () => {
  return (
    <Header className={style.header}>
      <div className={style.headerIconContainer}>
        <MenuOutlined className={style.headerIcon} />
        <CaretLeftOutlined className={style.headerIcon} />
      </div>
      <Tabs defaultActiveKey="view" items={items} />
    </Header>
  );
};

export default HeaderApp;
