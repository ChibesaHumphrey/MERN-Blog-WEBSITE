import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import Signin from "./Pages/Signin";
import PrivateRoute from "./Components/PrivateRoute";
import OnlyAdminRoute from "./Components/OnlyAdminRoute";
import CreatePost from "./Pages/CreatePost";
import PostPage from "./Pages/PostPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<Signin />} />
          <Route path="/post/:postSlug" element={<PostPage />} />
          <Route element={<OnlyAdminRoute />}>
            <Route path="create-post" element={<CreatePost />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
