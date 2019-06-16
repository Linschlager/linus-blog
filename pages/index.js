import Router from 'next/router';
const Index = () => {};

Index.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/blog',
    });
    res.end();
  } else {
    await Router.push('/blog');
  }
  return {};
};

export default Index;