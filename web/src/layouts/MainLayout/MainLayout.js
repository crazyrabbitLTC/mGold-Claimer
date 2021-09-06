import { routes } from '@redwoodjs/router'
import { Flex, Text, Link, Image } from '@chakra-ui/react'
import Web3Connect from '../../components/Web3connect/Web3connect'

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex flexDirection="column" height="100vh">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="1.5em"
          minHeight="3em"
        >
          <Link to={routes.home()}>
            <Flex alignItems="center">
              {' '}
              <Image
                boxSize="50px"
                objectFit="cover"
                src="https://dope-wars.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F28b999ad-39a1-4d88-adc8-a8455c2e3d9b%2FIcon-Red.png?table=block&id=8e694a61-fc4b-4190-9f29-a2db03c09a54&spaceId=b5211bca-6a21-42f3-a4b5-0030a7108aa9&width=250&userId=&cache=v2"
              ></Image>
              <Text fontSize="2xl" >$PAPER</Text>
            </Flex>
          </Link>
          <Web3Connect />
        </Flex>

        <Flex
          flexDirection="column"
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="1.5em"
          minHeight="3em"
        >
          <Text fontSize="sm">
            Claim your $PAPER {' '}
            <Link href="http://www.dennisonbertram.com" isExternal>
              Dennison Bertram
            </Link>
            .
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default MainLayout
