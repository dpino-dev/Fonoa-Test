import React from 'react'
import { Box, Center, Heading,} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <Box bg='blue.400' w='100%' h='auto' color='blackAlpha.700'>
             <Center>
                <Heading as='h1' >
                    Wellcome to Exchange Calculator!
                </Heading>
             </Center>
        </Box>
    )
}

export default NavBar