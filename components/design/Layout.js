import Navigation from './Navigation';
import Page from './Page';

export default ({ children }) => {
  return (
    <Page>
      <Navigation/>
      <section>
        { children }
      </section>
    </Page>
  );
}