"use client";

import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// import { HiMoon, HiSearch } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function NavigationBar() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="">
      <Navbar fluid rounded className="pt-4 border-b-2">
        <Navbar.Brand href="/">
          <img
            src="https://www.flowbite-react.com/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            Humphrey's Blog
          </span>
        </Navbar.Brand>
        <form>
          <TextInput
            type="text"
            rightIcon={AiOutlineSearch}
            placeholder="Search..."
            className="hidden lg:inline"
          />
        </form>
        <Button className=" w-12 h-10 lg:hidden" pill color="gray">
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Button
            gradientDuoTone="purpleToPink"
            onClick={() => navigate("sign-in")}
            pill
            size={"xs"}
          >
            Sign In
          </Button>
        </div>
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
          {/* <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"sign-in"}>Sign in</Link>
          </Navbar.Link> */}
          {/* <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"sign-up"}>Sign up</Link>
          </Navbar.Link> */}
          {/* <Navbar.Link active={path == "/"} as={"div"}>
            <Link to={"dashboard"}>Dashboard</Link>
          </Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}
