import { Route, Routes } from "react-router-dom";
import Users from "../screens/user/index";
import Home from "../screens/home/index";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default AppRoutes;
