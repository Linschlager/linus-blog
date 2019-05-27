import Link from 'next/link';
import { Icon, Menu, Layout } from "antd";
import { useRouter } from "next/router";
const { Sider } = Layout;

const routes = {
  '/': {
    key: 'home',
    label: 'Home',
    icon: 'home'
  },
  '/about': {
    key: 'about',
    label: 'About me',
    icon: 'info'
  }
};

const Header = () => {
  const route = useRouter();
  return (
   <Sider breakpoint="lg" collapsible>
     <Menu theme="dark" selectedKeys={[routes[route.pathname].key]} mode="inline">
       {
         Object.entries(routes).map(([ href, { key, label, icon }]) => (
          <Menu.Item key={key}>
            <Link href={href}>
              <a>
                <Icon type={icon}/>
                <span>{label}</span>
              </a>
            </Link>
          </Menu.Item>
         ))
       }
     </Menu>
   </Sider>
  );
}

export default Header;