import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  // useColorMode,
  Center,
  Text,
  Icon,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, StarIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  // const { colorMode, toggleColorMode } = useColorMode();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("brand.300", "gray.900")}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text fontSize="2xl" fontWeight={"bold"} color="brand.100">
              NewsHub
            </Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                rounded="full"
                bg="brand.100"
                color="brand.500"
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                m="0"
                p="0"
              >
                <StarIcon />
              </Button>
              {/* <Button
                bg={"brand.100"}
                rounded={"full"}
                color={colorMode === "light" ? "brand.500" : "brand.100"}
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                m={"0"}
                p={"0"}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}

              <Menu>
                <MenuButton
                  as={Button}
                  bg={"brand.100"}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  color={"brand.500"}
                  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                >
                  <Icon as={FaUser} boxSize={4} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Center>
                    <p>Username</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
