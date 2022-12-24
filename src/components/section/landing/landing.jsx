import { Button, HStack, Text } from "@chakra-ui/react"
import "./landing.css"

export const LandingSection = () =>{
    return(
        <HStack className="landing-section">
          <div className="landing-content">
            <Text fontSize="2xl">Hello, I'm </Text>
            <Text className="name" fontSize="4xl">
              VRINDA MAHAJAN
            </Text>
            <Text fontSize="3xl">a FRONT-END DEVELOPER</Text>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1Rytb9BtdaRSeBgogz_2qqF4MiQDrrra9UWtFAjjpHLs/edit?usp=sharing"
            >
              <Button
                className="btn-cta"
                size="lg"
                backgroundColor="primary"
                _hover={{ bg: "primary" }}
                color="white"
              >
                Download Resume
              </Button>
            </a>
            <HStack spacing={14} className="landing-contacts">
              <a class="contact-icons" href="https://github.com/vrinda-mahajan">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                class="contact-icons"
                href="https://www.linkedin.com/in/vrinda-mahajan-7a2b2a20b/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                class="contact-icons"
                href="https://twitter.com/vrinda_mahajan"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </HStack>
          </div>
          <div className="landing-demo-code">
            1. &nbsp;class <b>Person</b> &#123;
            <br />
            2. &nbsp;constructor() &#123; <br />
            3. &nbsp;&nbsp;&nbsp;&nbsp;this.name = "<b>Vrinda Mahajan</b>" ;{" "}
            <br />
            4. &nbsp;&nbsp;&nbsp;&nbsp;this.traits = ["<b>FRONTEND</b>", "
            <b>DEV</b>"] ; <br />
            5. &nbsp;&nbsp;&nbsp;&nbsp;this.age = new Date().getFullYear() -
            2002 ; <br />
            6. &nbsp;&nbsp;&#125; <br />
            7. &nbsp;&#125;
            <br />
          </div>
          <div className="design"></div>
        </HStack>
    )
}