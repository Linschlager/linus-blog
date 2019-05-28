const routes = [
  {
    path: '/',
    icon: 'home',
    key: 'index',
    label: 'Home',
    title: 'Welcome to my Blog-ish web presence',
  },
  {
    path: '/about',
    icon: 'info',
    key: 'about',
    label: 'About',
    title: 'Something about me',
  }
];

const intByProp = prop => value => routes.filter(r => r[prop] === value)[0];
const intMapByProp = prop => () => routes.reduce((map, cur) => ({ ...map, [cur[prop]]: cur }),{});

export const byPath = intByProp('path');
export const mapByPath = intMapByProp('path');
export const byKey = intByProp('key');
