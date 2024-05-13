// import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import customTheme from "./customTheme"
import App from './AppLayout/App'
import 'reactflow/dist/style.css'



const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <>
      <ChakraProvider theme={customTheme}>
      
        <App />
      </ChakraProvider>
      
    </>,
  )
}
