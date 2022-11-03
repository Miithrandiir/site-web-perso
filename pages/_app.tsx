import {NextIntlProvider} from 'next-intl';
import {AppProps} from 'next/app';
import '../styles/global.scss'

function MyApp({Component, pageProps}: AppProps) {
    return (
        // @ts-ignore
        <NextIntlProvider messages={pageProps.messages}>
            <Component {...pageProps} />
        </NextIntlProvider>
    )
}

export default MyApp
