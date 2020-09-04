// import Head from 'next/head'
import {Heading, Grid, Flex, Divider, Input, Link, Button, Text} from '@chakra-ui/core';

export default function Home() {
  
  return (
    <Grid as="main"
    height="100vh"
    templateColumns="1fr 480px 480px 1fr"
    templateRows="1fr 480px 1fr"
    templateAreas="
    '. . . .'
    '. logo form .'
    '. . . .'
    "
    alignItems="center"
    justifyContent="center"
    >

  <Flex as="section" 
  gridArea="logo"  
  flexDir="column" 
  alignItems="flex-start"
  >
    <img src="/mkpj-logo.svg" alt="logo" height="38px" width="250px"/>

    <Heading fontSize="6xl"
    lineHeight="shorter" 
    marginTop={18}
    >
    Faça seu login na plataforma
    </Heading>
    
  </Flex>
  
  <Flex gridArea="form" 
    h="100%"
    flexDir="column"
    bg="gray.700"
    borderRadius="md"
    alignItems="stretch"
    padding={16}
  >
    <Input height="50px"
    backgroundColor="gray.800"
    focusBorderColor="purple.500"
    borderRadius="sm"
    placeholder="E-mail"
    />
    <Input height="50px"
    backgroundColor="gray.800"
    focusBorderColor="purple.500"
    borderRadius="sm"
    placeholder="Senha"
    marginTop={2}
    />
    <Link alignSelf="flex-start"
      marginTop={2}
      fontSize="sm"
      color="purple.600"
      fontWeight="bold"
      _hover={{color: "purple.500"}}
    >Esqueci minha senha</Link>

    <Button bg="purple.700" borderRadius="md" onClick={()=>{}} variant="solid" height="50px"
    _hover={{
      backgroundColor: "purple.500"
    }}
    marginTop={2}
    >
    ENTRAR
    </Button>

    <Text marginTop={10} textAlign="center" color="gray.300"  
    >Ainda não possui uma conta? 
    <Link color="purple.600" 
    _hover={{
      textDecoration: "underline",
      color: "purple.500"
    }}> Registre-se</Link>
    </Text>

    <Divider marginY={8}/>
    <Flex alignItems="center"> 
      <Text  >Ou entre com</Text>
      <Button flex="1" bg="gray.600" borderRadius="md" marginLeft={6} height="50px"
      _hover={{
        bg: "purple.500"
      }}
       >GITHUB</Button>
    </Flex>


  </Flex>
  
</Grid>
    );
}
