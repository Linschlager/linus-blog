import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      { props.children }
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;