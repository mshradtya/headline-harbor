import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  Icon,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";
import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { auth } = useAuth();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
  };

  return (
    <>
      <Box
        bg={useColorModeValue("brand.300", "gray.900")}
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Text
              as={RouterLink}
              to="/"
              fontSize="2xl"
              fontWeight={"bold"}
              color="brand.100"
            >
              NewsHub
            </Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                as={RouterLink}
                to="/bookmarks"
                rounded="full"
                bg="brand.100"
                color="brand.500"
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                m="0"
                p="0"
              >
                <BsFillBookmarkFill />
              </Button>
              <Button
                bg={"brand.100"}
                rounded={"full"}
                color={colorMode === "light" ? "brand.500" : "brand.500"}
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
                  color={"brand.500"}
                  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                >
                  <Icon as={FaUser} boxSize={4} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Center>
                    <p>{auth.email ? auth.email : "Not Registered"}</p>
                  </Center>
                  <MenuDivider />
                  {auth.email ? (
                    <MenuItem
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Logout
                    </MenuItem>
                  ) : (
                    <MenuItem as={RouterLink} to="/login">
                      Login
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
