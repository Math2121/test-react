import { AppProps } from 'next/app';
import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css';
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;