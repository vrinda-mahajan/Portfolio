import { Flex, Text } from "@chakra-ui/react";
import "./about.css";

export const AboutSection = () => {
  return (
    <div id="about" className="about-me-section">
      <Text className="bold-heading">About me</Text>
      <Flex align="center" className="about-me">
        <img
          className="about-me-img"
          src="../assets/images/profile_img.jpg"
        />
        <p className="about-me-content">
          Hi, I am Vrinda Mahajan, a passionate FrontEnd Developer from City of
          Temples Jammu, India currently studying in my final year. I am
          very much passionate about Web Technologies and proficient in{" "}
          <b>React, CSS & JavaScript</b>.<br />
          <br />I enjoy the challenges of creating something new from scratch
          that helps me to build my fundamentals strong. Currently looking
          forward to gain some real world experience through internships and
          Open Source.
        </p>
      </Flex>
    </div>
  );
};
