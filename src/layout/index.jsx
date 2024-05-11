import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useLocationListen } from "utils/hooks";
import AppMenu from "./menu";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const AppLayout = () => {
  useLocationListen((location) => console.log(location));
  const { id } = useParams();

  useEffect(() => {
    console.log("params", id);
  }, [id]);

  return (
    <Layout style={{ height: "inherit" }}>
      <Header />
      <Layout>
        <Sider theme="light">
          <AppMenu selectedKeys={[location.pathname]} />
        </Sider>
        <Content style={{ padding: 40, overflow: "auto" }}>
          <Outlet />
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
