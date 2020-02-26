import React, { FunctionComponent, ReactElement } from "react";
import "../public/navbar.scss";

// import { Icon, Layout, Menu } from "antd";

// const { Header } = Layout;

const NavBar: FunctionComponent = (): ReactElement => (
  <nav className="navbar">
    <div className="title">Arpan Laha</div>
  </nav>
  // <Menu mode="horizontal" className="navbar">
  //   <Menu.Item key="home">Arpan Laha</Menu.Item>
  //   <Menu.Item key="github">
  //     <a
  //       href="https://github.com/arpanlaha"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <Icon type="github" theme="filled" />
  //       GitHub
  //     </a>
  //   </Menu.Item>
  //   <Menu.Item key="linkedin">
  //     <a
  //       href="https://linkedin.com/in/arpanlaha"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <Icon type="linkedin" theme="filled" />
  //       LinkedIn
  //     </a>
  //   </Menu.Item>
  // </Menu>
);

export default NavBar;
