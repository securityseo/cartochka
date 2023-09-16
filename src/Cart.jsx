import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Cart1 from './Img/img_cart.png'
import Cart2 from './Img/img_cart2.png'

function Cart() {
    return (
        <>
                <Box display={'flex'  } justifyContent={'center'} alignItems={'center'} gap={'20px'} >
                    <Box w={'392px'} h={'280px'} bg={'#D2F6FF'} padding={'24px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>


                    <Box>
                            <Heading  size={'md'}>Празднуй день рождения вместе с нами</Heading>
                            <Heading size={'xs'}>Ролл в подарок при заказе в день рождения</Heading>
                    </Box>
                    <Box w={'191px'} h={'149px'} marginLeft={'175px'}>
                            <img src={Cart1} alt="" />
                    </Box>

                    </Box>



                    <Box  w={'392px'} h={'280px'} bg={'#FFD8DA'} padding={'24px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>

                    <Box>
                            <Heading size={'md'}>Празднуй день рождения вместе с нами</Heading>
                            <Heading size={'xs'}>Ролл в подарок при заказе в день рождения</Heading>
                    </Box>
                    <Box w={'349px'} h={'110px'}>
                                <img src={Cart2} alt="" />
                    </Box>

                    </Box>


                </Box>


        </>
    )
}

export default Cart