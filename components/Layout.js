import { Layout } from 'antd';
const { Content, Footer } = Layout;

import PageHeading from "./PageHeading";
import Navigation from './Navigation';

// Ant Design Stylesheet
import 'antd/dist/antd.css';

export default ({ children }) => {
  const year = (new Date()).getFullYear();
  return (
   <Layout style={{ minHeight: '100vh' }}>
     <Navigation />
     <Layout>
       <PageHeading />
       <Content style={{ margin: '0 16px' }}>
         <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
           {children}
         </div>
       </Content>
       <Footer style={{ textAlign: 'center' }}>&copy;&nbsp;{year} Linus&nbsp;Vettiger</Footer>
     </Layout>
   </Layout>
  );
}