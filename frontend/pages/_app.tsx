import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../components/app-layout'
import UserLayout from '../components/user-layout'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isAuthPage = router.pathname === '/dashboard' || router.pathname === '/discover' || router.pathname === '/library';
  const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('isAuthenticated') === 'true';

  if (!isClient) {
    return null; // or a loading spinner
  }

  if (isAuthPage && isAuthenticated) {
    return (
      <UserLayout>
        <Component {...pageProps} />
      </UserLayout>
    )
  }

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp