import { Button } from "@chakra-ui/react";
import { login } from "../services/login";

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
