import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent: string
    content: string
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Box
            backgroundColor='#ffffffd6'
            boxShadow='0 3px 4px 1px #8955404f'
            minHeight='120px'
            padding={8}
            borderRadius='25px'
        >
            <Text
                fontSize='2xl'
                fontWeight='bold'
            >
                {mainContent}
            </Text>
            <Text
                fontSize='2xl'
            >

            </Text>
            {content}
        </Box>
    )
}

export default CardInfo;