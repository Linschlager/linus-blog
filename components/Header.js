import Link from 'next/link';
import Router from 'next/router';
import { Icon, Menu, Layout } from "antd";
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
  const [selected, setSelected] = React.useState('/');
  React.useEffect(() => {
    setSelected(Router.router.pathname)
  });

  return (
    <Sider breakpoint="lg" collapsible>
      <Menu theme="dark" defaultSelectedKeys={[routes[selected].key]} mode="inline">
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