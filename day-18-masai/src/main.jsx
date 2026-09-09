
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(

  <ChakraProvider value={defaultSystem}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>

)
