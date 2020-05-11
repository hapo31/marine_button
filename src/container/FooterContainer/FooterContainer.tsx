import React from "react";
import { Nav, NavItem, Navbar, NavLink } from "react-bootstrap";
import Link from "../../components/Link";
// import lastUpdatedInfo from "../../model/Updated/LastUpdatedInfo";

export default () => {
  // const date = new Date(lastUpdatedInfo.date);
  return (
    <footer>
      {/* <Navbar className="last-updated-info">
        <Nav className="mr-auto font-weight-bold last-updated-info-new">
          <NavItem className="font-weight-bold last-updated-info-new">
            New!
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <div className="last-updated-info self text-very-small">
              最近の更新:{" "}
              {`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`}
            </div>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="last-updated-info">
        <div className="border rounded last-updated-info-content">
          {lastUpdatedInfo.files.map(v => (
            <span
              className="monospace text-very-small font-weight-bold"
              key={v}
            >
              {`${v} `}
            </span>
          ))}
        </div>
      </div> */}
      <Navbar expand="lg">
        <Nav className="mr-auto">
          <NavItem>
            <span className="font-weight-bold navbar-text mb-0">
              本ページはファン創作による非公式ページです。
              <br />
              問題点を見つけたら
              <Link
                href="https://twitter.com/happou31"
                style={{ color: "blue" }}
              >
                Twitter
              </Link>
              または
              <Link
                href="https://github.com/happou31/marine_button/issues"
                style={{ color: "black" }}
              >
                GithubのIssue
              </Link>
              にご報告ください。
            </span>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink
              className="copyright"
              target="_blank"
              rel="noopener"
              href="https://www.hololive.tv/terms"
            >
              © cover corp. All Rights Reserved.
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </footer>
  );
};
