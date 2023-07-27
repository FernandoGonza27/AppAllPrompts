

import Error from "./pages/error/error";
import Home from "./pages/home/home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Admin from "./pages/admin/Admin";
import ExecutePrompts from "./pages/prompts/execute/executeprompts";
import UpdatePrompts from "./pages/prompts/update/updateprompts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error/>,
    children: [
      {
        path: "execute",
        element: < ExecutePrompts/>,
      },
      {
        path: "update",
        element: <UpdatePrompts/>,
      },
      {
        path: "create",
        element: <UpdatePrompts/>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <Error/>   
  },
  {
    path: "/register",
    element: <Register></Register>,
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

