/*
 * @FilePath: /Users/i104/bambam/src/App.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import AppRoutes from '@/routes'
import { ConfigProvider } from 'antd';

import '@/App.css'

function App() {
  return (
    <ConfigProvider direction="ltr">
      <AppRoutes />
    </ConfigProvider>
  )
}

export default App
