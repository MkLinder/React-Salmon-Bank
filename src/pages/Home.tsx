import { Box, Center } from "@chakra-ui/react";
import { Card } from "../components/card";

const Home = () => {
    return (
        <Center>
            <Box
                maxWidth='50vw'
                padding='25px'>
                <Card />
            </Box>
        </Center>
    )
}

export default Home;