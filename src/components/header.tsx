import { Box, Text} from '@chakra-ui/react';
import '@fontsource/poetsen-one';

export const Header = () => {
    return (
        <Box 
            backgroundColor='coral'
            boxShadow='0 1px 3px #895540c9'
        >
            <Text 
                fontSize='40px'
                fontFamily='Poetsen One'
                paddingLeft='20px'
                color='lightsalmon'
                textShadow='-1px 1px 2px #895540f5'
            >
                Salmon Bank
            </Text>
        </Box>
    );
}