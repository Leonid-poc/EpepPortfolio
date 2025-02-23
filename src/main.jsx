import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={{
    token: {
      color: '#FFF',
      margin: 0,
      padding: 0,
    }
  }}>
    <StrictMode>
      <App />
    </StrictMode>
  </ConfigProvider>
)
