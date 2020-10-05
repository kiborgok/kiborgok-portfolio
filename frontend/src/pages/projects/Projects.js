import React from 'react';
import Layout from '../../components/layout/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          <ProjectItem >
            <ProjectTitle>Covid19 Estimator Web App</ProjectTitle>
            <SkillContainer>
              <Pill><a href="https://safe-chamber-58160.herokuapp.com/">Covid19 Estimator Web App</a></Pill >
            </SkillContainer>
          </ProjectItem>
          <ProjectItem >
            <ProjectTitle>Quick Credit Web App</ProjectTitle>
            <SkillContainer>
              <Pill><a href="https://quickcredit-webapp-api.herokuapp.com/">Quick Credit Web App</a></Pill >
            </SkillContainer>
          </ProjectItem>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;