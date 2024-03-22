import { Container } from "./styles";
import Headshot from "../../assets/Headshot-AJ.png"
import dockerIcon from "../../assets/icons8-docker.svg";
import gcpIcon from "../../assets/icons8-google-cloud.svg";
import javaIcon from "../../assets/icons8-java.svg";
import jiraIcon from "../../assets/icons8-jira.svg";
import mysqlIcon from "../../assets/icons8-mysql.svg";
import pythonIcon from "../../assets/icons8-python.svg";
import tableauIcon from "../../assets/icons8-tableau-software.svg";
import mongodbIcon from "../../assets/icons8-mongodb.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Anukriti and I ideate, design, build, and manage software applications and products.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
I am passionate about developing innovative and impactful solutions for complex problems using cutting-edge technologies and methodologies. I have a diverse skillset across various domains, including Software and Web Development, Project Management, Data Science, and Strategy.</p>        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            <div className="education">
                        <a href="https://sv.cmu.edu/programs/msse.html"><button>Carnegie Mellon University (MSSE)</button></a>
                        <a href="https://www.bits-pilani.ac.in/academics/integrated-first-degree/b-e-computer-science-engineering-dubai/"><button>BITS Pilani (BEng CS)</button></a>
            </div>
            </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Some of my skills are:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
        
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={dockerIcon} alt="React" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={javaIcon} alt="React" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={jiraIcon} alt="React" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={mysqlIcon} alt="React" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={gcpIcon} alt="React" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={pythonIcon} alt="React" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={tableauIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={mongodbIcon} alt="React" />
            </ScrollAnimation>
          </div>
        </div>
      
      </div>
      
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Headshot}  alt="Headshot" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
