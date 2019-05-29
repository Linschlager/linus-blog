import Navigation from '../design/Navigation';
import Page from '../design/Page';

// Ant Design Stylesheet
import { mapByPath } from '../helper/routing';
import { useRouter } from 'next/router';

export default ({ children }) => {
  const year = (new Date()).getFullYear();
  const router = useRouter();
  return (
    <Page>
      <Navigation links={mapByPath()} activeRoute={router.pathname}/>
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