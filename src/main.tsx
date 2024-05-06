import { ColorModeScript } from '@chakra-ui/react'
// import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import customTheme from "./customTheme";
import App from './AppLayout/App'



const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <>
      <ColorModeScript initialColorMode={"dark"} />
      <ChakraProvider theme={customTheme}>
      
        <App />
      </ChakraProvider>
      
    </>,
  )
}
