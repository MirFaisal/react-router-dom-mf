import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Friends from "./components/friends/Friends";
import Home from "./components/home/Home";
import FriendDetails from "./components/friend_details/FriendDetails";
import Layout from "./layout/Layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/friends",
          element: <Friends />,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: "/friend/:friendID",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendID}`
            );
          },
          element: <FriendDetails />,
        },
      ],
      errorElement: <h2>ERROR</h2>,
    },
    { path: "*", element: <h2>ERROR</h2> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
