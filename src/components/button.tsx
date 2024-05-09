import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IDButton {
    onClick: () => void;
}

export const LoginButton = ({onClick}: IDButton) => {
    return (
        <Button
            onClick={onClick}
            colorScheme='teal'
            size='sm'
            width='100%'
            marginTop='5px'
        >
            Entrar
        </Button>
    );
}

export default LoginButton
