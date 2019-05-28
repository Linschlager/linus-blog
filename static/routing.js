const routes = [
  {
    path: '/',
    key: 'index',
    label: 'Home',
    title: 'Welcome to my Blog-ish web presence',
  },
  {
    path: '/about',
    key: 'about',
    label: 'About',
    title: 'Something about me',
  }
];

const intByProp = prop => value => routes.filter(r => r[prop] === value)[0];

export const byPath = intByProp('path');
export const byKey = intByProp('key');
