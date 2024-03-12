"use client";

import { Navbar } from "flowbite-react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function NavigationBar() {
  const path = useLocation().pathname;
  return (
    <div className="pt-4">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            src="https://www.flowbite-react.com/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Humphrey's Blog
          </span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"/"}>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"about"}>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"projects"}>Projects</Link>
          </Navbar.Link>
          <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"sign-in"}>Sign in</Link>
          </Navbar.Link>
          <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"sign-up"}>Sign up</Link>
          </Navbar.Link>
          <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"dashboard"}>Dashboard</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}
