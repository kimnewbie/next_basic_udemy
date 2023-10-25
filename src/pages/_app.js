import Layout from '@/app/_components/layout/Layout';
import '../app/globals.css'; // 전 버전은 styles 폴더 안에 들어있음

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}