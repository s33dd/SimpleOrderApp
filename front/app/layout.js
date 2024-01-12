import Layout, { Header, Content, Footer } from 'antd/es/layout/layout'
import './globals.css'
import { Menu } from 'antd'
export const metadata = {
  title: 'Список заказов',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Layout style={{minHeight: "100vh"}}>
          <Content>{children}</Content>
          <Footer style={{textAlign: "center"}}>2024</Footer>
        </Layout>
        </body>
    </html>
  )
}
