import { HStack, Text } from "@chakra-ui/react";
import "./contact.css";

export const ContactSection = () => {
  const contactInfo = [
    {
      link: "https://github.com/vrinda-mahajan",
      iconClass: "fa-brands fa-github",
    },
    {
      link: "https://www.linkedin.com/in/vrinda-mahajan-7a2b2a20b/",
      iconClass: "fa-brands fa-linkedin",
    },
    {
      link: "https://twitter.com/vrinda_mahajan",
      iconClass: "fa-brands fa-twitter",
    },
    {
      link: "https://www.instagram.com/vrinda__mahajan/",
      iconClass: "fa-brands fa-instagram",
    },
    {
      link: "mailto:vrindamahajan96@gmail.com",
      iconClass: "fa-solid fa-envelope",
    },
  ];
  return (
    <div id="contact" className="contact-section">
      <Text className="contact-heading">Contact me</Text>
      <HStack justifyContent="center" className="contact-info">
        {contactInfo.map((contact,index) => (
          <a key={index} className="contact-items" href={contact.link}>
            <i className={contact.iconClass}></i>
          </a>
        ))}
      </HStack>
    </div>
  );
};
