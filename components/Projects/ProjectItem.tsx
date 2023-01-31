import React from "react";
import styled from "styled-components";

interface ProjectItemProps {
  coverURL?: string;
  title: string;
  description: string;
  techUsed: string[];
  isFeatured: boolean;
  isComingSoon?: boolean;
  isWip: boolean;
  githubURL: string;
}

const ProjectItem = ({
  coverURL,
  title,
  description,
  techUsed,
  isFeatured,
  isWip,
  isComingSoon,
  githubURL,
}: ProjectItemProps) => {
  return (
    <Wrapper onClick={() => window.open(githubURL, "_blank")}>
      <div className="project_featured">
        {isFeatured ? (
          <p>Featured Project</p>
        ) : isComingSoon ? (
          <p>Coming Soon</p>
        ) : null}
      </div>
      <img src={coverURL} alt={description} />
      <div className="project_content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tech_used_list">
          {techUsed.length
            ? techUsed.map((tech, idx) => (
                <div key={idx} className="tech_used">
                  {tech}
                </div>
              ))
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
  margin-bottom: 5rem;

  img {
    width: 100%;
    height: auto;
    /* max-height: 35rem; */
    object-fit: cover;
    border-radius: ${(props) => props.theme.spacing.borderRadius};
  }

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

  /* .project_image {
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${(props) => props.theme.spacing.borderRadius};
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
      height: 25rem;
    }
  } */

  .project_content {
    margin: 1rem 0;
    overflow-wrap: break-word;

    h4 {
      margin: 0;
      font-size: 2rem;
    }

    p {
      max-width: 80%;
      font-size: 1.1rem;
      font-weight: thin;

      @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
        min-width: 100%;
      }
    }

    .tech_used_list {
      display: flex;
      flex-wrap: wrap;
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
