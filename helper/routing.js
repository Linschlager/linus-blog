const routes = [
  {
    path: '/',
    icon: 'home',
    key: 'index',
    label: 'Home',
    title: 'Welcome to my Blog-ish web presence',
    listed: true,
  },
  {
    path: '/about',
    icon: 'user',
    key: 'about',
    label: 'About',
    title: 'Something about me',
    listed: true,
  },
  {
    path: '/blog',
    icon: 'edit',
    key: 'blog',
    label: 'Blog',
    title: 'Some things I found interesting',
    listed: true,
  }
];

const intByProp = prop => value => routes.filter(r => r[prop] === value)[0];
const intMapByProp = prop => () => routes.filter(r => r.listed).reduce((map, cur) => ({ ...map, [cur[prop]]: cur }),{});

export const byPath = intByProp('path');
export const mapByPath = intMapByProp('path');
export const byKey = intByProp('key');
