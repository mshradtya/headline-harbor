import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, StarIcon } from "@chakra-ui/icons";

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
  const { colorMode, toggleColorMode } = useColorMode();
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
              <Button
                bg={"brand.100"}
                rounded={"full"}
                color={colorMode === "light" ? "brand.500" : "brand.100"}
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                m={"0"}
                p={"0"}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  bg={"brand.100"}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                  //   minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
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
