import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import "./navbar.css";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navItems = [
    { name: "About", id: "#about" },
    { name: "Skills", id: "#skills" },
    { name: "Projects", id: "#projects" },
    { name: "Blogs", id: "#blogs" },
    { name: "Contact", id: "#contact" },
  ];
  return (
    <nav className="navbar">
      <a href="/">
        <img className="navbar-logo" src="../assets/images/v_logo.png" />
      </a>
      <HStack spacing={12} className="navbar-items">
        {navItems.map((navItem,index) => (
          <Link key={index} href={navItem.id}>
            <Text className="nav-item" fontSize="2xl">
              {navItem.name}
            </Text>
          </Link>
        ))}
      </HStack>
      <Icon id="drawer-icon" as={ArrowRightIcon} boxSize={6} onClick={onOpen} />
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        className="drawer"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Icon onClick={onClose} as={ArrowLeftIcon} boxSize={6} />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={12} className="drawer-items" align="flex-start">
              {navItems.map((navItem,index) => (
                <Link key={index} onClick={onClose} href={navItem.id}>
                  <Text className="drawer-item" fontSize="2xl">
                    {navItem.name}
                  </Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};
