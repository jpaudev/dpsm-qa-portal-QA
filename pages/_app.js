import Router, {useRouter} from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress
import '../styles/layout-height.css';
import '../styles/sidebar-responsive.css';
import { CookiesProvider } from 'react-cookie'
import Layout from '../components/layout';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	if(router.asPath == "/login/" || router.asPath == "/forgot-password/") {
		return (
			<CookiesProvider>
				<Component {...pageProps} />
			</CookiesProvider>
		)
	} else {
		return (
			<CookiesProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CookiesProvider>
		)
	}
}
export default MyApp;
