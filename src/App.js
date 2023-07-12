
import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/Register";
import Error from "./pages/error";
import Home from "./pages/home.";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error/>,
    children:[
      {
        path:"/register",
        element :<Register/>
      },
      {
        path:"/login",
        element :<Login/>
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

