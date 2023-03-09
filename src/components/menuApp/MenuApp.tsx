/* eslint-disable comma-dangle */
import React from "react";
import { Menu } from "antd";
import { LayoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import style from "./MenuApp.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  icon: React.ReactNode,
  label: React.ReactNode,
  key: React.Key,
  // eslint-disable-next-line comma-dangle
  children?: MenuItem[]
): MenuItem {
  return {
    icon,
    label,
    key,
    children,
  } as MenuItem;
}

const items2: MenuItem[] = [
  getItem(
    <LayoutOutlined />,
    <div className={style.menuContainer}>
      Название проекта <br /> Аббревиатура
    </div>,
    "2",
    [
      getItem(<LayoutOutlined />, "По проекту", "3"),
      getItem(<LayoutOutlined />, "Объекты", "4"),
      getItem(<LayoutOutlined />, "СМР", "5"),
    ]
  ),
];

const MenuApp = () => {
  return (
    <Menu
      mode="inline"
      style={{
        height: "100%",
        borderRight: 0,
        width: "234px",
      }}
      items={items2}
    />
  );
};

export default MenuApp;
