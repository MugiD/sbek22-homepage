import Chakra from "../components/chakra";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
};

export default Website;
