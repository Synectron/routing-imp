import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { UserLoginContext } from "./store/LoginContext";

function App() {
  return (
    <UserLoginContext>
      <RouterProvider router={router} />
    </UserLoginContext>
  );
}

export default App;
