import { Box } from "@chakra-ui/react"
import { Footer } from "./footer"
import { Header } from "./header"


export const Layout = ({children}: any) => {

    return (
        <Box 
            height='100vh'
            backgroundColor='lightsalmon'
        >
            <Header />
            {children}
            <Footer />
        </Box>
    )
}