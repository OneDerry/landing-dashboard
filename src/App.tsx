import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Routes } from "./Routings/Routes";

function App() {
  return <RouterProvider router={Routes}></RouterProvider>;
}

export default App;
