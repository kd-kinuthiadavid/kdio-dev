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
        <div className="project_featured">
          <p>Featured Project</p>
        </div>
      ) : null}
      <div className="project_image"></div>
      <div className="project_content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tech_used_list">
          {techUsed.length
            ? techUsed.map((tech) => <div className="tech_used">{tech}</div>)
            : null}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectItem;
export type { ProjectItemProps };

const Wrapper = styled.div`
  min-height: 100vh;
  font-family: ${(props) => props.theme.fonts.text};

  .project_featured {
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.spacing.borderRadius};
    margin-bottom: 1rem;

    p {
      margin: 0;
      padding: 0.5rem 1rem;
    }
  }

  .project_image {
    width: 100%;
    height: 40rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${(props) => props.theme.spacing.borderRadius};
    cursor: pointer;
  }

  .project_content {
    margin: 1rem 0;

    h4 {
      margin: 0;
      font-size: 2rem;
    }

    p {
      max-width: 80%;
      font-size: 1.1rem;
      font-weight: thin;
    }

    .tech_used_list {
      display: flex;
      gap: 1rem;

      .tech_used {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.primary};
        border-radius: ${(props) => props.theme.spacing.borderRadius};
        padding: 0.2rem 0.6rem;
      }
    }
  }
`;
