import React, { useState } from 'react';
import { Container } from './styles';
import externalLink from '../../assets/external-link.svg';
import ScrollAnimation from 'react-animate-on-scroll';

// Define types
type Project = {
  name: string;
  link: string;
  description: string;
  techStack: string[];
};

type ProjectsByCategory = {
  [key: string]: Project[];
};

export function Project(): JSX.Element {
  // Define categories and group projects
  const categories: string[] = ['Web Development', 'Data/ML', 'Cloud'];
  const projectsByCategory: ProjectsByCategory = {
    'Web Development': [
     {
        name: 'STRAI',
        link: 'https://github.com/WinexWolf/nextjs-flask-framework/',
        description:
          'A responsive AI-powered web application, STRAI - Strategic AI Branding Expert. STRAI serves as a chatbot specializing in marketing and branding strategies, providing expert advice and generating comprehensive brand value documents to enhance customer outreach and engagement.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Flask', 'Google Cloud Platform', 'MySQL', 'OpenAI API'],
      },
      {
        name: 'Emergency Social Network',
        link: 'https://s23esna4.onrender.com/',
        description:
          'A web app to help the community before, during and after flood emergencies with features like group/private messaging, threads, resource locators and preparedness quizzes.',
        techStack: ['Node.js', 'Express', 'Socket.io', 'MongoDB', 'Docker',  'Render'],
      },
       {
        name: 'WellNest',
        link: 'https://github.com/WinexWolf/WellNestApp',
        description:
          'A mental health awareness, prevention, and treatment app for young professionals. Ideated and implemented from concept to MVP via market research, prototyping and delivery.  ',
        techStack: ['React', 'Material UI', 'Tailwind CSS', ],
      },
         {
        name: 'CampuShare',
        link: 'https://github.com/CMUSVCampuShare',
        description:
          'A scalable carpooling platform with a microservices architecture for the CMU-SV community, integrating ride-sharing, food delivery, and social features.    ',
        techStack: ['Java', 'SpringBoot', 'MongoDB', 'React', 'JWT',' PayPal API', 'Google Maps API'],
      },
    ],
    'Data/ML': [
      {
        name: 'Customer Segmentation using Machine Learning',
        link: 'https://ieeexplore.ieee.org/document/10117924',
        description:
          'Implemented customer segmentation process across two datasets to identify distinct customer groups for targeted marketing strategies. Extracted features, calculated RFM values, and applied clustering techniques (K-means, hierarchical, etc.) for segmentation.  Silhouette, Davies-Bouldin, and Elbow methods determined the optimal number of clusters and validated model performance.',
        techStack: ['Python', 'Jupyter Notebook', 'Scipy', 'Scikit-Learn', 'Matplotlib', 'Numpy'],
      },
       {
        name: 'Breast Cancer Prediction using Machine Learning and Feature Selection via Metaheuristics',
        link: 'https://github.com/WinexWolf/Breast-Cancer-Prediction-using-Machine-Learning',
        description:
          'Implemented Recursive Feature Elimination with Cross-Validation (RFECV), Maximum Information Coefficient (MIC), Genetic Algorithm (GA), and Particle Swarm Optimization (PSO) techniques to evaluate their effectiveness in selecting informative features for parameter tuning to enhance prediction accuracy.',
        techStack: ['Python', 'Pandas', 'Plotly', 'Numpy', 'Scikit-Learn'],
      },
       {
        name: 'Automatic Student Performance Prediction System Using Data Mining Techniques',
        link: 'https://ieeexplore.ieee.org/document/9629427',
        description:
          'Developed a 90.57% accurate student performance prediction system using advanced machine learning techniques, ensemble modeling with classification algorithms (SVM, Decision Tree, KNN, XGBoost, and so on.)',
        techStack: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Numpy'],
      },
         {
        name: 'Hands-On Data Engineering',
        link: 'https://drive.google.com/file/d/1e4x3-OYZcyrQCiL88P2bG13IzmMpO4Mh/view',
        description:'Performed Extract, Transform, Load (ETL) processes, building data pipelines, and orchestrating tasks using Directed Acyclic Graphs (DAGs) with Apache Airflow. Implemented robust data workflows to manage and automate data processing tasks effectively. ',
        techStack: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Numpy'],
      },
     
    ],
    'Cloud': [
      {
        name: 'Big Data Processing Toolbox',
        link: 'https://github.com/14-848-Cloud-Infrastructure-Spring-2024/course-project-option-1-jraviS2023/invitations',
        description:'Developed a microservice-based platform with containerized development tools. Employed Terraform for infrastructure-as-code and integrated Jenkins with SonarQube to automate quality analysis on public GitHub repositories. Ensured scalability, maintainability, and streamlined CI/CD practices within the platform.',
        techStack: ['Apache Hadoop', 'Spark', 'Jenkins', 'SonarQube', 'Jupyter', 'Docker', 'Kubernetes (GKE)','Google Cloud Platform'],
      }
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="categories">
        {/* Display categories as tabs */}
        {categories.map((category: string) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects">
        {/* Display projects based on the selected category */}
        {projectsByCategory[selectedCategory].map((project: Project, index: number) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b "
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techStack.map((tech: string) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
