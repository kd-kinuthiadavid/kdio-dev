import React from "react";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionHeading from "../SectionHeading";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";

const Projects = () => {
  const isMobile = useMediaQuery("(max-width:650px)");

  const projects: ProjectItemProps[] = [
    {
      coverURL: "/images/cruunchify.png",
      githubURL: "https://github.com/kd-kinuthiadavid/cruunchify",
      title: "Cruunchify",
      description:
        "Get statistics on how you listen to Spotify - you no longer have to wait for the end of the year to get your Spotify Wrapped.",
      isFeatured: true,
      isWip: true,
      techUsed: [
        "NextJs",
        "React Query",
        "TailwindCss",
        "Spotify API",
        "Zustand",
        "WIP",
      ],
    },
    {
      coverURL: isMobile ? "/images/poem-xs.png" : "/images/poem-md.png",
      githubURL: "https://github.com/kd-kinuthiadavid/poetry",
      title: "kinuthiadavid.io.poetry",
      description:
        "Personal website where I share poetry, prose and short stories.",
      isFeatured: false,
      isWip: true,
      isComingSoon: true,
      techUsed: [
        "NextJs",
        "React Query",
        "TailwindCss",
        "Notion API",
        "Figma",
        "WIP",
      ],
    },
    // {
    //   coverURL: "/images/authr.jpg",
    //   githubURL: "",
    //   title: "Authr: Design System.",
    //   description:
    //     "A design system implementation (both Design and Implementation) for Authr: Auth As A Service",
    //   isFeatured: false,
    //   isComingSoon: true,
    //   isWip: false,
    //   techUsed: ["NextJs", "Tailwind", "Figma", "Storybook", "Coming Soon"],
    // },
  ];
  return (
    <Wrapper>
      <SectionHeading text="Some Things I've Built" />
      <div className="projects_list">
        {projects.map((project, idx) => (
          <ProjectItem key={idx} {...project} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 3rem;

  .projects_list {
    margin-top: 1rem;
  }
`;
