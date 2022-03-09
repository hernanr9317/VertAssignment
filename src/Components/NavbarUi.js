import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Link as LinkChakra,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import {ColorModeSwitch} from './ColorModeSwitch';

const Links = [ 
  { name: 'Activities',
    href: '/'
  },
  { name: 'Montly Activities',
    href: '/montlystats'
  } 
];

const NavLink = ({ children, href } ) => (
  <LinkChakra as={Link}
    px={2}
    py={1}
    rounded={'md'}
    to={href}>
    {children}
  </LinkChakra>
);

export const NavbarUi = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}  style={{width: '100vw'}} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>RUNAPP</Box>
            <Avatar
                  size={'sm'}
                  src={
                    'https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-runner-icon-png-image_4164742.jpg'
                  }
           />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <ColorModeSwitch />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}