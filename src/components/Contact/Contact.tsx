import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Get in touch</h2>
     
      </header>
       <a href="mailto:anukriti.jaiswal01@gmail.com">
      <div className="contacts">
        <div>
        <a href="mailto:anukriti.jaiswal01@gmail.com"><img src={emailIcon} alt="Email" /></a> 
        </div>
        </div>
        </a>
      <Form></Form>
    </Container>
  )
}