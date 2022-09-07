import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => App,
                enhanceComponent: (Component) => Component,
            })
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }
    render() {
        return (
            <Html>
                <Head>
                    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
                    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js' async ></script>
                    <meta name="description" content="Mapa de resiliencia panama" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
