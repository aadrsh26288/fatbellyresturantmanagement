import { Flex,
    Image,} from '@chakra-ui/react';
import React from 'react';

import { resturantInfo } from '../data/ResturantInfo';
import Navbar from '../components/Navbar';


export default function Menu() {
  return (
    <>
        <Navbar companyName={resturantInfo.name} styleAColorHex={'#FF2C55'} />   
         <Flex justifyContent="center" alignContent="center" my={2}>
            <Image minW={"300px"} maxW={"300px"}  src={resturantInfo.logo}/>
            </Flex>
    </>
  );
}
