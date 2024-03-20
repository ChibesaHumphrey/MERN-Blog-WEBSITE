"use client";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import FooterComponent from "./FooterComponent";
import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../Redux/theme/themeSlice";
// import { signoutSuccess } from "./src/Redux/User/UserSlice.js";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";

export default function NavigationBar() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/v1/users/sign-out", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
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
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounde d />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleSignout()}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Button
              gradientDuoTone="purpleToBlue"
              outline
              onClick={() => navigate("sign-in")}
            >
              Sign In
            </Button>
          )}
          {/* <Button
            gradientDuoTone="purpleToPink"
            onClick={() => navigate("sign-in")}
            pill
            size={"xs"}
          >
            Sign In
          </Button> */}
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
      <FooterComponent />
    </div>
  );
}
