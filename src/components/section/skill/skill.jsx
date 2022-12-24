import { Box, HStack, Text } from "@chakra-ui/react";
import "./skill.css";

export const SkillSection = () => {
  const skillsInfo = [
    "react",
    "redux",
    "javascript",
    "typescript",
    "css3",
    "html5",
    "chakra-ui",
    "github",
    "nodejs",
    "python",
  ];
  return (
    <div id="skills" className="skill-section">
      <Text className="bold-heading">My Skillsets</Text>
      <HStack className="skill-container">
        {skillsInfo.map((skillName) => (
          <Box className="skill-icon-bg">
            <img
              className="skill-icon"
              title={skillName}
              src={`../assets/icons/${skillName}.svg`}
            />
          </Box>
        ))}
      </HStack>
    </div>
  );
};
