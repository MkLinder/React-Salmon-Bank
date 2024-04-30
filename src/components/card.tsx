import { Box, Center} from "@chakra-ui/react"
import { LoginButton } from "./button"
import { LoginInput } from "./input"
import { login } from "../services/login"

export const Card = () => {
    return (
        <Box                     
            backgroundColor='#ffffff'
            borderRadius='25px'
            padding='15px'
        >
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <LoginInput />
            <Center>
                <LoginButton onClick={login} />
            </Center>
        </Box>
    )
}