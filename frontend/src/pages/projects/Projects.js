import React from 'react';
import Layout from '../../components/layout/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          <ProjectItem>
            <SkillContainer>
              <Pill style={{ backgroundColor: "darkgreen" }}>
                <a
                  href="https://todo-frontend-mbj1ksm5u-kiborgok.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Todos app
                </a>
              </Pill>
            </SkillContainer>
          </ProjectItem>
          <ProjectItem>
            <SkillContainer>
              <Pill style={{ backgroundColor: "darkgreen" }}>
                <a
                  href="https://nextjs-blog-kohl-eta-32.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A blog
                </a>
              </Pill>
            </SkillContainer>
          </ProjectItem>
          <ProjectItem>
            <SkillContainer>
              <Pill style={{ backgroundColor: "darkgreen" }}>
                <a
                  href="https://quickcredit-webapp-api.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quick Credit
                </a>
              </Pill>
            </SkillContainer>
          </ProjectItem>
          <ProjectItem>
            <SkillContainer>
              <Pill style={{ backgroundColor: "darkgreen" }}>
                <a
                  href="https://safe-chamber-58160.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Covid19 Estimator
                </a>
              </Pill>
            </SkillContainer>
          </ProjectItem>
          {/* {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))} */}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;