/*
 * @FilePath: /click/Users/i104/vite3/src/layout/index.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { useEffect } from 'react'
import { Outlet, useLocation, useParams } from "react-router-dom";
import AppMenu from './menu'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const AppLayout = () => {
    const location = useLocation()
    const { id } = useParams()

    useEffect(() => {
        console.log('pageview', location)
        console.log('params', id)
    }, [location, id])

    return (
        <Layout style={{ height: 'inherit' }}>
            <Header />
            <Layout>
                <Sider theme='light'>
                    <AppMenu selectedKeys={[location.pathname]} />
                </Sider >
                <Content>
                    <Outlet />
                </Content>
            </Layout>
            <Footer />
        </Layout>
    )
}

export default AppLayout