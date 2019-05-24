import Link from 'next/link';
import Router from 'next/router';
import PropTypes from "prop-types";
import { Menu, PageHeader } from "antd";

const routes = {
  '/': {
    key: 'home',
    label: 'Home'
  },
  '/about': {
    key: 'about',
    label: 'About'
  }
};

const Header = () => {
  const [path, setPath] = React.useState('/');
  React.useEffect(() => {
    const route = Router.router;
    console.log(route.pathname);
    setPath(route.pathname);
  }, [Router.router]);

  return (
    <>
      <PageHeader title={routes[path].label} onBack={() => history.back()}/>
      <Menu mode="horizontal" selectedKeys={[routes[path].key]} >
        {
          Object.entries(routes).map(([ href, { key, label} ]) => (
            <Menu.Item key={key}>
              <Link href={href}><a>{label}</a></Link>
            </Menu.Item>
          ))
        }
      </Menu>
    </>
  );
};

export default Header;