import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress
import '../styles/layout-height.css';
import { CookiesProvider } from 'react-cookie'

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
    	<CookiesProvider>
    		<Component {...pageProps} />
    	</CookiesProvider>
    )
}
export default MyApp;