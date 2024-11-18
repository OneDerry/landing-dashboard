import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../LoginDashboard/Dashboarditems/Dashboard";
import Home from "../HomePage/Home";
import Mypage from "../LoginDashboard/MypageItems/Mypage";
import Appearance from "../LoginDashboard/Apperance/Appearance";
import Activity from "../LoginDashboard/Activity/Activity";
import Users from "../LoginDashboard/Users/Users";
import Settings from "../LoginDashboard/Settings/Settings";
import Pocket from "../LoginDashboard/Pocket/Pocket";
import WeatherView from "../LoginDashboard/Weather/view";


export const Routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/mypage", element: <Mypage /> },
  { path: "/appearance", element: <Appearance /> },
  { path: "/activity", element: <Activity /> },
  { path: "/users", element: <Users /> },
  { path: "/settings", element: <Settings /> },
  { path: "/pocket", element: <Pocket /> },
  { path: "/weather", element: <WeatherView /> },
]);
