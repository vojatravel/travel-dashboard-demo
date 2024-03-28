// pages/_app.js or pages/_app.tsx
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
