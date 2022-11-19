import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";

const Projects = () => {
  const projects: ProjectItemProps[] = [
    {
      coverURL: "",
      title: "Cruunchify",
      description:
        "Get statistics on how you listen to Spotify - you no longer have to wait for the end of the year to get your Spotify Wrapped.",
      isFeatured: true,
      techUsed: ["NextJs", "React Query", "Styled-Components", "Spotify API"],
    },
    {
      coverURL: "",
      title: "Authr: Design System.",
      description:
        "A design system implementation (both Design and Implementation) for Authr: Auth As A Service",
      isFeatured: true,
      techUsed: ["NextJs", "Tailwind", "Figma"],
    },
  ];
  return (
    <Wrapper>
      <SectionHeading text="Some Things I've Built" />
      <div className="projects_list">
        {projects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};

  .projects_list {
    margin-top: 5rem;
  }
`;
