export const posts = [
  {
    slug: 'getting-started',
    title: 'Setting up a blog with NextJS',
    summary: 'Coming Soon™',
    listed: true,
  },
  {
    slug: 'web-dark-mode',
    title: 'Dark Mode on WebSites',
    summary: 'Dark Mode Setting is passed through the browser to CSS',
    listed: true
  }
];

const intByProp = prop => value => posts.filter(r => r[prop] === value)[0];
const intMapByProp = prop => () => posts.filter(r => r.listed).reduce((map, cur) => ({ ...map, [cur[prop]]: cur }),{});

export const bySlug = intByProp('slug');
export const mapBySlug = intMapByProp('slug');