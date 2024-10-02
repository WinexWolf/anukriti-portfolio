import React, { useState } from 'react';
import { Container } from './styles';
import externalLink from '../../assets/external-link.svg';
import ScrollAnimation from 'react-animate-on-scroll';

// Define types
type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  techStack: string[];
};

export function Experience(): JSX.Element {
  const experiences: Experience[] = [
    {
      title: "Founding Engineer",
      company: "DataGurus",
      period: "Aug 2024 - Current",
      description:
        "Led end-to-end development of a full-stack e-commerce MVP, from concept to deployment. Crafted user stories and product requirements, designed UX/UI in Figma, and created branding and marketing strategies. Architected and implemented a microservices-based solution. Developed features including search, payments, and LLM interaction. Engineered the system architecture, implemented DevOps practices, and set up monitoring to create a robust, scalable platform.",
      techStack: ["Next.js", "Node.js","Postgres", "Redis", "Stripe", "Clerk","Product Management"],
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Carnegie Mellon University",
      period: "Aug 2023 - Apr 2024",
      description:
        "Led projects for 18-652 Foundations of Software Engineering involved overseeing the development lifecycle, ensuring adherence to software engineering principles, and fostering collaborative teamwork. For 18-653 Software Design & Architecture, directed projects focused on system architecture, design patterns, and scalability, ensuring alignment with industry standards and best practices.",
      techStack: ["Leadership", "Web Dev", "Design Patterns"],
    },
    {
      title: "Technical Summer Intern",
      company: "Smart Twigs Consultancy",
      period: "Jun 2023 - Aug 2023",
      description:
        "Engaged closely with stakeholders to delineate intricate technical requisites and craft solutions for pivotal Impact and Campaigns functionalities, employing Agile/Scrum methodologies. Played a pivotal role in augmenting product capabilities by offering insightful design suggestions, showcasing expertise in both technical intricacies and user-centric development facets.",
      techStack: ["Jira", "React", "Issue-Tracking", "Agile", "Figma"],
    },
    {
      title: "Software Developer (Intern Jan 2022-Aug 2022)",
      company: "PwC MiddleEast",
      period: "Jan 2022 - Dec 2022",
      description:
        "Collaborated with a cross-disciplinary team to create a dynamic, feature-rich bi-lingual web portal, leveraging React and Redux within the Next.js framework, alongside JavaScript/TypeScript and Google Maps API, hosted on Azure web app services with Docker. Seamlessly integrated and rigorously tested backend services (MuleSoft) for data retrieval and analysis. Orchestrated project workflows through Agile methodologies, utilizing Jira and Azure DevOps, while actively contributing to requirement gathering sessions.",
      techStack: [
        "Next.js",
        "React",
        "Google Maps API",
        "Redux",
        "Docker",
        "Jira",
        "Azure DevOps",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Lock&Stock",
      period: "Sep 2020 - Dec 2020",
      description:
        "Automated analytics by developing a smart dashboard using Dash, HTML/CSS, AWS MySQL and Python libraries. Reduced decision-making and analysis time for all teams with trained machine learning predictive models. Provided better marketing and sales insights, increased customer retention by 20%.",
      techStack: ["Python", "HTML", "CSS", "AWS MySQL", "Dash"],
    },
  ];

  return (
    <Container id="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <ScrollAnimation key={index} animateIn="fadeInUp">
            <div className="event">
              <div className="event-content">
                <div className="period">{experience.period}</div>
                <div className="period">{experience.company}</div>
                <div className="title">{experience.title}</div>
                <p>{experience.description}</p>
                <ul className="tech-stack">
                  {experience.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
