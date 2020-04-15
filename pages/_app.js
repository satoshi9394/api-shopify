import App from 'next/app'
import Head from 'next/head'
import { AppProvider } from '@shopify/polaris'
import {Provider} from '@shopify/app-bridge-react'
import Cookies from 'js-cookie'

import '@shopify/polaris/styles.css'
import translations from '@shopify/polaris/locales/en.json'
//la info base de url para axios
import axios from 'axios'
axios.defaults.baseURL = API_URL


//import liberias de redux
import thunk from 'redux-thunk'
import  {createStore, applyMiddleware} from 'redux'
import { Provider as ReduxProvider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import reducer from '../store'
import { composeWithDevTools } from 'redux-devtools-extension'

//construye el store
const middleware = [thunk]
const makeStore = (initialState, option) => {
  return createStore(
    reducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

class MyApp extends App {

  render() {

    const { Component , pageProps, store } = this.props;
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forceRedirect: true }

    return(
      <React.Fragment>
        <Head>
          <title>Angel App</title>
          <meta charSet="utf-8"/>
        </Head>
        <Provider config={config}>
          <ReduxProvider store={store}>
            <AppProvider il8n={translations}>
              <Component {...pageProps}/>
            </AppProvider>
          </ReduxProvider>
        </Provider>
      </React.Fragment>
    )
  }

}

export default withRedux(makeStore)(MyApp)