export const trackPage = url => {
  try {
    window.gtag('config', 'UA-141582672-1', {
      page_location: url,
    });
  } catch(ex) {}
};