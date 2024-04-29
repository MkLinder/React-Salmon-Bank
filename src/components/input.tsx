import { Box, Input } from "@chakra-ui/react"

export const LoginInput = () => {
    return (
        <Box>
            <Input placeholder='email' />
            <Input placeholder='password' />
        </Box>
    )
}