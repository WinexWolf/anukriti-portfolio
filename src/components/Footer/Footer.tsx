import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://www.linkedin.com/in/anukritijaiswal/" className="logo">
        <span>Open to Work!</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/anukritijaiswal/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/WinexWolf/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      
       
      </div>
    </Container>
  )
}
