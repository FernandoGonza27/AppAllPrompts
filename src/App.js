
import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/Register";
import Error from "./pages/error/error";
import Home from "./pages/home/home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error/>   
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <Error/>   
  },
  {
    path: "/users",
    element: <Admin></Admin>,
    errorElement: <Error/>   
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

