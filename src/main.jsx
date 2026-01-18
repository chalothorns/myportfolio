import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home.jsx";
import { Layout } from "./views/Layout.jsx";
import MyProjects from "./views/MyProjects.jsx";
import AboutMe from "./views/AboutMe.jsx";
import MySkills from "./views/MySkills.jsx";
import Experience from "./views/Experience.jsx";
import ContactMe from "./views/ContactMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "myprojects", element: <MyProjects /> },
      { path: "aboutme", element: <AboutMe /> },
      { path: "myskills", element: <MySkills /> },
      { path: "experience", element: <Experience /> },
      { path: "contactme", element: <ContactMe /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
);