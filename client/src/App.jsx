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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<Signin />} />
        </Route>
      </>
    )
  );
  return (
    <div className=" container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;