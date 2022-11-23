import React from "react";
import { Text } from "@chakra-ui/react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Text
          fontSize={{ base: "lg", xl: "36px" }}
          color='Blue'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          px='10px'
          mb='14px'>
          BigCorp
        </Text>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
