import React from "react";
import {MenuButton,HStack,Container,MenuDivider,MenuGroup,MenuList,MenuItem,Menu,Button} from "@chakra-ui/react"
 export default function ThirdNav(){
    return<Container marginTop='80px' position='sticky' top='0' bg='white' maxWidth='100%' zIndex='99'  centerContent>
    <HStack spacing='10'>
    <Menu>
  <MenuButton as={Button}  colorScheme='white' color='black' _hover={{color: '#FF3399' }}>
    SALE
  </MenuButton>
  <MenuList>
    <MenuGroup title='Face'>
      <MenuItem>Bonanza Offers</MenuItem>
      <MenuItem>Buy 1 Get 1 Free</MenuItem>
      <MenuItem>Upto 20% Off</MenuItem>
      <MenuItem>Flat 30% Off</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Vegan'>
      <MenuItem>Eye</MenuItem>
      <MenuItem>Face</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} colorScheme='white' color='black' _hover={{color: '#FF3399' }}>
    MAKEUP
  </MenuButton>
  <MenuList>
  <MenuGroup title='Face'>
    <MenuItem>Foundation</MenuItem>
      <MenuItem>BB Cream</MenuItem>
      <MenuItem>Powder</MenuItem>
      <MenuItem>Kajal</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Vegan'>
    <MenuItem>Eye</MenuItem>
      <MenuItem>Face</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button}  colorScheme='white' color='black' _hover={{ color: '#FF3399' }}>
    SKINCARE
  </MenuButton>
  <MenuList>
  <MenuGroup title='Face'>
    <MenuItem>Foundation</MenuItem>
      <MenuItem>BB Cream</MenuItem>
      <MenuItem>Powder</MenuItem>
      <MenuItem>Kajal</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Vegan'>
      <MenuItem>Eye</MenuItem>
      <MenuItem>Face</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button}  colorScheme='white' color='black' _hover={{color: '#FF3399' }}>
    FRAGRANCE
  </MenuButton>
  <MenuList>
  <MenuGroup title='Face'>
    <MenuItem>Foundation</MenuItem>
      <MenuItem>BB Cream</MenuItem>
      <MenuItem>Powder</MenuItem>
      <MenuItem>Kajal</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Vegan'>
      <MenuItem>Eye</MenuItem>
      <MenuItem>Face</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button}  colorScheme='white' color='black' _hover={{ color: '#FF3399' }}>
    HAIRCARE
  </MenuButton>
  <MenuList>
  <MenuGroup title='Face'>
    <MenuItem>Foundation</MenuItem>
      <MenuItem>BB Cream</MenuItem>
      <MenuItem>Powder</MenuItem>
      <MenuItem>Kajal</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Vegan'>
      <MenuItem>Eye</MenuItem>
      <MenuItem>Face</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button}  colorScheme='white' color='black' _hover={{ color: '#FF3399' }}>
    TOOLS & BRUSHES
  </MenuButton>
  <MenuList>
  <MenuGroup title='Face'>
    <MenuItem>Foundation</MenuItem>
      <MenuItem>BB Cream</MenuItem>
      <MenuItem>Powder</MenuItem>
      <MenuItem>Kajal</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Vegan'>
      <MenuItem>Eye</MenuItem>
      <MenuItem>Face</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button}  colorScheme='white' color='black' _hover={{ color: '#FF3399' }}>
    BRANDS
  </MenuButton>
  <MenuList>
  <MenuGroup title='Face'>
    <MenuItem>Loreal</MenuItem>
      <MenuItem>Lakme</MenuItem>
      <MenuItem>Kaya</MenuItem>
      <MenuItem>Habibs</MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Vegan'>
      <MenuItem>Zara</MenuItem>
      <MenuItem>Gucci</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>

    </HStack>
    </Container>
 }