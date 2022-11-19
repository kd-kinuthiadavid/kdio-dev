import React from "react";
import styled from "styled-components";

interface ProjectItemProps {
  coverURL?: string;
  title: string;
  description: string;
  techUsed: string[];
  isFeatured: boolean;
}

const ProjectItem = ({
  coverURL,
  title,
  description,
  techUsed,
  isFeatured,
}: ProjectItemProps) => {
  return (
    <Wrapper>
      {isFeatured ? (
        <div className="project_featured">Featured Project</div>
      ) : null}
      <div className="project_image"></div>
      <div className="project_content">
        <h4>{title}</h4>
        <p>{description}</p>
        {techUsed.length
          ? techUsed.map((tech) => <div className="tech_used">{tech}</div>)
          : null}
      </div>
    </Wrapper>
  );
};

export default ProjectItem;
export type { ProjectItemProps };

const Wrapper = styled.div`
  .project_image {
    width: 100%;
    height: 40rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${(props) => props.theme.spacing.borderRadius};
  }
`;
