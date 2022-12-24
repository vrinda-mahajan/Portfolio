import { Text } from "@chakra-ui/react"
import "./footer.css"

export const Footer = () => {
    return(
        <div className="footer">
            <img className="footer-logo" src="../assets/images/v-logo-white.png" />
            <Text className="footer-content" fontSize="xl">Made with ❣️ and React by Vrinda Mahajan</Text>
        </div>
    )
}