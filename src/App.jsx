import AppRoutes from "@/routes";
import { ConfigProvider } from "antd";

import "@/App.css";

function App() {
  return (
    <ConfigProvider direction="ltr">
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
