import { Button, HStack, Tag, TagLabel, Text } from "@chakra-ui/react";
import "./project.css";

export const ProjectSection = () => {
  return (
    <div id="projects" className="project-section">
      <Text className="bold-heading">My Projects</Text>
      <HStack className="project-card" justifyContent="flex-start">
        <div className="project-desc-container">
          <div className="project-desc">
            <Text className="project-name" fontSize="4xl">
              FLORA SHOP
            </Text>
            <Text className="project-details" fontSize="2xl">
              FloraShop is an{" "}
              <Text fontSize="2xl" as="b">
                eCommerce website
              </Text>{" "}
              built for plant lovers. This shop is the one-stop solution for any
              kind of plant for your beautiful garden.
              <br />
              <Text fontSize="2xl" as="b">
                Core features
              </Text>{" "}
              include Cart and wishlist management, and filter functionality.
            </Text>
            <HStack className="tech-section" spacing={4} marginTop={4}>
              <Text fontSize="2xl" as="b">
                Tech Stack:
              </Text>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="React"
                  src="./src/assets/icons/react.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  React
                </TagLabel>
              </Tag>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="CSS 3"
                  src="./src/assets/icons/css3.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  CSS
                </TagLabel>
              </Tag>
            </HStack>
            <HStack spacing={6} className="project-card-footer">
              <a
                href="https://flora-shop-react-git-dev-vrinda-mahajan.vercel.app/"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Live Project
                </Button>
              </a>
              <a
                href="https://github.com/vrinda-mahajan/FloraShop-react"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </div>
        </div>
        <img className="project-img" src="./src/assets/images/ecommerce.png" />
      </HStack>
      <HStack className="project-card" justifyContent="flex-start">
        <div className="project-desc-container">
          <div className="project-desc">
            <Text className="project-name" fontSize="4xl">
              FLORA TALK
            </Text>
            <Text className="project-details" fontSize="2xl">
              Flora Talk is a{" "}
              <Text fontSize="2xl" as="b">
                social media
              </Text>{" "}
              project using React,{" "}
              <Text fontSize="2xl" as="b">
                Redux Toolkit
              </Text>{" "}
              for state management, and{" "}
              <Text fontSize="2xl" as="b">
                Chakra UI
              </Text>{" "}
              for CSS.
              <br />
              <Text fontSize="2xl" as="b">
                Core features
              </Text>{" "}
              include creating posts, posting feeds, Following/Unfollowing
              Users, Like posts, and updating user’s Profile.
            </Text>
            <HStack className="tech-section" spacing={4} marginTop={4}>
              <Text fontSize="2xl" as="b">
                Tech Stack:
              </Text>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="React"
                  src="./src/assets/icons/react.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  React
                </TagLabel>
              </Tag>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="Chakra UI"
                  src="./src/assets/icons/chakra-ui.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  Chakra UI
                </TagLabel>
              </Tag>
            </HStack>
            <HStack spacing={6} className="project-card-footer">
              <a
                href="https://social-media-react-git-profile-vrinda-mahajan.vercel.app/"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Live Project
                </Button>
              </a>
              <a
                href="https://github.com/vrinda-mahajan/social-media-react"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </div>
        </div>
        <img
          className="project-img"
          src="./src/assets/images/social-media.png"
        />
      </HStack>
      <HStack className="project-card" justifyContent="flex-start">
        <div className="project-desc-container">
          <div className="project-desc">
            <Text className="project-name" fontSize="4xl">
              FLORA UI
            </Text>
            <Text className="project-details" fontSize="2xl">
              Flora UI is an open-source{" "}
              <Text fontSize="2xl" as="b">
                component library
              </Text>{" "}
              build to make the website UI faster. It helps you to quickly build
              your project, by focusing much on functionality.
              <br />
              It has{" "}
              <Text fontSize="2xl" as="b">
                15 reusable
              </Text>{" "}
              components with different variations, and I am using this library
              in my other projects.
            </Text>
            <HStack className="tech-section" spacing={4} marginTop={4}>
              <Text fontSize="2xl" as="b">
                Tech Stack:
              </Text>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="HTML"
                  src="./src/assets/icons/html5.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  HTML
                </TagLabel>
              </Tag>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="CSS 3"
                  src="./src/assets/icons/css3.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  CSS
                </TagLabel>
              </Tag>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="Javascript"
                  src="./src/assets/icons/javascript.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  Javascript
                </TagLabel>
              </Tag>
            </HStack>
            <HStack spacing={6} className="project-card-footer">
              <a href="https://flora-ui.netlify.app/" target="_blank">
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Live Project
                </Button>
              </a>
              <a
                href="https://github.com/vrinda-mahajan/Component-Library"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </div>
        </div>
        <img
          className="project-img"
          src="./src/assets/images/component-library.png"
        />
      </HStack>
      <HStack className="project-card" justifyContent="flex-start">
        <div className="project-desc-container">
          <div className="project-desc">
            <Text className="project-name" fontSize="4xl">
              FLORA FACTORY
            </Text>
            <Text className="project-details" fontSize="2xl">
              FloraFactory is a{" "}
              <Text fontSize="2xl" as="b">
                video library
              </Text>{" "}
              web app built using react where you will find videos related to
              gardening.
              <br />
              <Text fontSize="2xl" as="b">
                Core features
              </Text>{" "}
              include browsing multiple videos, liking them, adding them to
              watch later, creating playlists, and can also view history.
            </Text>
            <HStack className="tech-section" spacing={4} marginTop={4}>
              <Text fontSize="2xl" as="b">
                Tech Stack:
              </Text>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="React"
                  src="./src/assets/icons/react.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  React
                </TagLabel>
              </Tag>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="CSS 3"
                  src="./src/assets/icons/css3.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  CSS
                </TagLabel>
              </Tag>
            </HStack>
            <HStack spacing={6} className="project-card-footer">
              <a
                href="https://video-library-git-dev-vrinda-mahajan.vercel.app/"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Live Project
                </Button>
              </a>
              <a
                href="https://github.com/vrinda-mahajan/Video-Library"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </div>
        </div>
        <img
          className="project-img"
          src="./src/assets/images/video-library.png"
        />
      </HStack>
      <HStack className="project-card" justifyContent="flex-start">
        <div className="project-desc-container">
          <div className="project-desc">
            <Text className="project-name" fontSize="4xl">
              FLORA TALK
            </Text>
            <Text className="project-details" fontSize="2xl">
              FloraQuiz is a{" "}
              <Text fontSize="2xl" as="b">
                quiz app
              </Text>{" "}
              bulid to test your knowledge about the greens.
              <br />
              This website is built on react, react router, CSS, firebase and
              has used Flora UI components.
              <br />
            </Text>
            <HStack className="tech-section" spacing={4} marginTop={4}>
              <Text fontSize="2xl" as="b">
                Tech Stack:
              </Text>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="React"
                  src="./src/assets/icons/react.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  React
                </TagLabel>
              </Tag>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="Typescript"
                  src="./src/assets/icons/typescript.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  Typescript
                </TagLabel>
              </Tag>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="CSS"
                  src="./src/assets/icons/css3.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  CSS
                </TagLabel>
              </Tag>
            </HStack>
            <HStack spacing={6} className="project-card-footer">
              <a
                href="https://flora-quiz-react-git-quesandresult-vrinda-mahajan.vercel.app/"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Live Project
                </Button>
              </a>
              <a
                href="https://github.com/vrinda-mahajan/FloraQuiz-react"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </div>
        </div>
        <img className="project-img" src="./src/assets/images/quiz.png" />
      </HStack>
      <HStack className="project-card" justifyContent="flex-start">
        <div className="project-desc-container">
          <div className="project-desc">
            <Text className="project-name" fontSize="4xl">
              FLASHTYPE
            </Text>
            <Text className="project-details" fontSize="2xl">
              Flashtype is a{" "}
              <Text fontSize="2xl" as="b">
                typing app
              </Text>{" "}
              bulid to test your typing speed, correctness.
              <br />
              This website is built on react, simple CSS animations.
              <br />
            </Text>
            <HStack className="tech-section" spacing={4} marginTop={4}>
              <Text fontSize="2xl" as="b">
                Tech Stack:
              </Text>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="React"
                  src="./src/assets/icons/react.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  React
                </TagLabel>
              </Tag>
              <Tag
                size="lg"
                padding="0.3rem 1.2rem"
                fontSize="1.8rem"
                backgroundColor="primary"
                borderRadius="full"
              >
                <img
                  className="tech-icon"
                  title="CSS"
                  src="./src/assets/icons/css3.svg"
                />
                <TagLabel
                  backgroundColor="primary"
                  color="white"
                  paddingLeft="0.4rem"
                >
                  CSS
                </TagLabel>
              </Tag>
            </HStack>
            <HStack spacing={6} className="project-card-footer">
              <a
                href="https://vrinda-mahajan.github.io/FlashType/"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Live Project
                </Button>
              </a>
              <a
                href="https://github.com/vrinda-mahajan/FlashType"
                target="_blank"
              >
                <Button
                  className="project-card-footer-btn"
                  size="lg"
                  backgroundColor="primary"
                  _hover={{ bg: "primary" }}
                  color="white"
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </div>
        </div>
        <img className="project-img" src="./src/assets/images/flashtype.png" />
      </HStack>
    </div>
  );
};
