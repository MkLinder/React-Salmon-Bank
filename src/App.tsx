import { ChakraProvider } from '@chakra-ui/react';
import { Card } from './components/card'


function App() {
  return (
    <ChakraProvider>
      <Card/>
    </ChakraProvider>
  );
}

export default App;
