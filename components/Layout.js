import { Layout } from 'antd';

const { Content, Footer } = Layout;

import Header from './Header';

import 'antd/dist/antd.css';

export default ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header />
    <Layout>
      <Content style={{ margin: '0 16px' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
);