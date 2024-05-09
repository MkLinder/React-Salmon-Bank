import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../components/cardInfo";
import { useEffect, useState } from "react";
import { api } from "../Api";

interface userData {
    email: string
    password: string
    name: string
    balance: number
}

const Account = () => {
    const [userData, setUserData] = useState<null | userData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | userData = await api
            setUserData(data)
        }
        getData()
    }, [])

    const currentDate = new Date()

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={20}>
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size='xl' color="white" />
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo
                                    mainContent={`Bem vindo, ${userData?.name}`}
                                    content={`
                                        ${currentDate.getDay()} / 
                                        ${currentDate.getMonth()} / 
                                        ${currentDate.getFullYear()} - 
                                        ${currentDate.getHours()}:
                                        ${currentDate.getMinutes()}
                                    `}
                                />

                                <CardInfo mainContent="Saldo" content={`R$${userData.balance}`}/>
                            </>
                        )
                }

            </SimpleGrid>
        </Center>
    )
}

export default Account;