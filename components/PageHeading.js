/* eslint-global React */
import {PageHeader} from "antd";
import PropTypes from 'prop-types';
import {useRouter} from "next/router";
import { byPath } from '../helper/routing';

const PageHeading = () => {
  const router = useRouter();
  const [path, setPath] = React.useState(byPath(router.pathname));
  React.useEffect(() => {
    setPath(byPath(router.pathname));
  }, [router.pathname]);
  return (
   <PageHeader title={path.title} onBack={() => window.history.back()} />
  );
};

PageHeading.propTypes = {
  title: PropTypes.string,
};

PageHeading.defaultProps = {
  title: 'Title missing!'
};

export default PageHeading