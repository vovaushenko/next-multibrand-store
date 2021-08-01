import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import Modal from '../components/Modal/Modal';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { wrapper } from '../store';
import { GlobalStyles } from '../styles/globalStyle';
import { mainTheme, secondaryTheme } from '../styles/mainTheme';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme === 'dark' ? mainTheme : secondaryTheme}>
        <GlobalStyles />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Modal />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default wrapper.withRedux(WrappedApp);
