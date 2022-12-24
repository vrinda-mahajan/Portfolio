import { HStack, Link, Text } from "@chakra-ui/react";
import "./navbar.css";

export const Navbar = () => {
  const navItems = [
    { name: "About", id: "#about" },
    { name: "Skills", id: "#skills" },
    { name: "Projects", id: "#projects" },
    { name: "Blogs", id: "#blogs" },
    { name: "Contact", id: "#contact" },
  ];
  return (
    <nav className="navbar">
      <a href="#home">
        <img className="navbar-logo" src="../assets/images/v_logo.png" />
      </a>
      <HStack spacing={12} className="navbar-items">
        {navItems.map((navItem) => (
          <Link href={navItem.id}>
            <Text className="nav-item" fontSize="2xl">
              {navItem.name}
            </Text>
          </Link>
        ))}
      </HStack>
    </nav>
  );
};
