import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import THEMEPROVIDER from "./contexts/themeContext";

export default function App() {
  return (
    <THEMEPROVIDER>
      <Header />

      <Outlet />
    </THEMEPROVIDER>
  );
}
