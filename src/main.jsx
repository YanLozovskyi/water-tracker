import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/store';
import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyles, theme } from './styles';

import App from 'components/App';
// import Loader from './components/common/Loader/Loader';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>,
);
