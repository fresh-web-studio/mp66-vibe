import '@/styles'
import { Head } from "minista"
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'

export default function (props) {
    const {
        children,
        title,
        url,
    } = props


    return (
        <>
            <Head htmlAttributes={{ lang: 'ru' }}>
                <title>{title}МеталлПром: прием металлолома, лом черных и цветных металлов в Нижнем Тагиле и Свердловской области</title>
                <script src="/src/main.js" type='module' />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/assets/favicons/site.webmanifest" />
            </Head>
            <Header url={url} />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    )
}
