import { Container, Facebook, Linkedin, Instagram  } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center  p-10">
            <aside>

                <Container className="w-10 h-10" />
                <p className="font-bold">
                    HSM
                    <span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/houssam-el-malki-412bb7303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <Linkedin  className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.instagram.com/houssam_el_malki?igsh=MWIzcXZxeXg0M2NnNg==" target="_blank" rel="noopener noreferrer">
                        <Instagram  className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.facebook.com/houssam.el.malki.2025?rdid=qLXwc1dMpd3V1F5D&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LdMyqHzAT%2F#" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                    
                </div>
            </nav>
        </footer>
    )
}

export default Footer