import { Route, Routes } from "react-router-dom";
import Users from "../screens/user/index";
import Home from "../screens/home/index";
import DocumentPage from "../screens/document";
import SubmittedPage from "../screens/documentSubmitted";
import PendingPage from "../screens/documentPending";
import SearchPage from "../screens/documentSearch";
import BinPage from "../screens/documentBin";
import FileCabinetCompletePage from "../screens/documentFileCabinetComplete";
import FileCabinetPendingPage from "../screens/documentFileCabinetPending";
import Login from "../screens/Login";
const AppRoutes = () => {
  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/documents" element={<DocumentPage />} />
      <Route path="/documents-submitted" element={<SubmittedPage />} />
      <Route path="/documents-pending" element={<PendingPage />} />
      <Route path="/documents-search" element={<SearchPage />} />
      <Route path="/documents-bin" element={<BinPage />} />
      <Route path="/documents-file-cabinet-complete" element={<FileCabinetCompletePage />} />
      <Route path="/documents-file-cabinet-pending" element={<FileCabinetPendingPage />} />


    </Routes>
  );
};

export default AppRoutes;
