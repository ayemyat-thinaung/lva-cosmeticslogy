import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
          />
          <link
            rel="shortcut icon"
            href="/image/logo.png"
            type="image/x-icon"
          />
        </Head>
        <body id="root">
          <Main />
          <NextScript />
        </body>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.20.0/polyfill.min.js"
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '598607404130551');
          fbq('track', 'PageView');
          fbq('track', 'FindLocation');
          fbq('track', 'Contact');`,
          }}
        />
        <noscript>
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=598607404130551&ev=PageView&noscript=1"
          />
        </noscript> */}
        {/* Global site tag (gtag.js) - Google Analytics */}

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-174486874-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-174486874-1');
              `
          }}
        />
        <noscript>
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=598607404130551&ev=PageView&noscript=1"
          />
        </noscript> */}
      </Html>
    );
  }
}
