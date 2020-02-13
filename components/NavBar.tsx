import React, { FunctionComponent, ReactElement } from "react";
import { Icon, Menu } from "antd";

const NavBar: FunctionComponent = (): ReactElement => (
  <Menu mode="horizontal" className="navbar">
    <Menu.Item key="home">Arpan Laha</Menu.Item>
    <Menu.Item key="github">
      <a
        href="https://github.com/arpanlaha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="github" theme="filled" />
        GitHub
      </a>
    </Menu.Item>
    <Menu.Item key="linkedin">
      <a
        href="https://linkedin.com/arpanlaha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="linkedin" theme="filled" />
        LinkedIn
      </a>
    </Menu.Item>
  </Menu>
);

export default NavBar;
