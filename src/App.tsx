import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import { Card } from './components/card'
import { Layout } from './components/layout';


function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Center>
          <Box 
            maxWidth='50vw'
            padding='25px'>
            <Card/>
          </Box>
        </Center>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
