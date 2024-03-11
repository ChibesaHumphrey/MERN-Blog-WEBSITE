"use client";

import { Button, Navbar } from "flowbite-react";

export default function NavigationBar() {
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
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
