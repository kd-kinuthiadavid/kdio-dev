import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";

const Projects = () => {
  return (
    <Wrapper>
      <SectionHeading text="Some Things I've Built" />
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};
`;
