import { useRouter } from 'next/router';

import Navigation from './Navigation';
import Page from './Page';

export default ({ children }) => {
  const year = (new Date()).getFullYear();
  const router = useRouter();
  return (
    <Page>
      <Navigation activeRoute={router.pathname}/>
      <section>
        { children }
      </section>
      <footer>&copy;&nbsp;{year} Linus&nbsp;Vettiger</footer>
      <style jsx>{`
        section {
          /* Hide Footer just outside the view*/
          min-height: calc(100vh - 130px);
        }
      `}</style>
    </Page>
  );
}