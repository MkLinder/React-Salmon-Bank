import { Box, Button, Center, Flex, Input } from "@chakra-ui/react"
import { LoginButton } from "./button"
import { LoginInput } from "./input"

export const Card = () => {
    return (
        <Box minHeight='100vh' minWidth='100vw' backgroundColor='#9413dc'>
            <Center>
                <Flex
                    direction='column'
                    maxWidth='50vw'
                    backgroundColor='#ffffff'
                    borderRadius='25px'
                    padding='15px'

                >
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    <LoginInput />
                    <Center>
                        <LoginButton />
                    </Center>

                </Flex>
            </Center>
        </Box>
    )
}