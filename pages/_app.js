import App from 'next/app'
import NavBar from '../components/NavBar'
import '../styles/styles.css'
 
export default function MyApp({ Component, pageProps, example }) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}
 
MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}