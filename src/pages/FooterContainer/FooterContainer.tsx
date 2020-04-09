import React from "react";
import { Nav, NavItem, Navbar, NavbarProps } from "react-bootstrap";
export default () => (
  <footer>
    <Navbar expand="lg" className="navbar navbar-expand-lg">
      <Nav bsPrefix="mr-auto" className="navbar-nav">
        <NavItem className="nav-item">
          <span className="font-weight-bold navbar-text mb-0">
            本ページはファン創作による非公式ページです。
            <br />
            問題点を見つけたら
            <a
              href="https://twitter.com/happou31"
              style={{ color: "blue" }}
              target="_blank"
              rel="noopener"
            >
              Twitter
            </a>
            または
            <a
              href="https://github.com/happou31/marine_button/issues"
              style={{ color: "black" }}
              target="_blank"
              rel="noopener"
            >
              GithubのIssue
            </a>
            にご報告ください。
          </span>
        </NavItem>
      </Nav>
      <Nav className="navbar-nav">
        <NavItem className="nav-item copyright">
          <a
            className="nav-link"
            target="_blank"
            rel="noopener"
            href="https://www.hololive.tv/terms"
          >
            © cover corp. All Rights Reserved.
          </a>
        </NavItem>
      </Nav>
    </Navbar>
  </footer>
);
