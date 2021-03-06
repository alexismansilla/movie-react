import React from "react";
import { Menu as Navbar } from 'antd';
import { Link } from 'react-router-dom';

import './Menu.scss';

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-logo">
        <Navbar theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Navbar.Item key="1">
          	<Link to="/">Home</Link>
          </Navbar.Item>

          <Navbar.Item key="2">
          	<Link to="/new-movies">New Movies</Link>
          </Navbar.Item>

          <Navbar.Item key="3">
          	<Link to="/popular">Popular</Link>
          </Navbar.Item>

          <Navbar.Item key="4">
          	<Link to="/search">Search</Link>
          </Navbar.Item>
        </Navbar>
      </div>
    </div>
  )
}
