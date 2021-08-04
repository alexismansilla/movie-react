import React from "react";
import { Menu as Navbar } from 'antd';
import { Link } from 'react-router-dom';

import './Menu.scss';

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-logo">
        <Navbar theme="dark" mode="horizontal" defaultSelectedKey={["1"]}>
          <Navbar.Item key="1">
          <Link to="/">Home</Link>
          </Navbar.Item>
        </Navbar>
      </div>
    </div>
  )
}
