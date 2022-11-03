import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div className="about_subHeading">
        <h3>About Me</h3>
        <div className="hr"></div>
      </div>
      <div className="about_content">
        <div className="about_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde or
            sit amet, consectetur adipisicing elit. Unde possimus delectus ut,
            expedita, voluptatum ex dolores dolore laborum nihil porro autem
            veniam sequi optio. Id provident eaque suscipit aliquam sunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde or
            sit amet, consectetur adipisicing elit. Unde possimus delectus ut,
            expedita, voluptatum ex dolores dolore laborum nihil porro autem
            veniam sequi optio. Id provident eaque suscipit aliquam sunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde or
            sit amet, consectetur adipisicing elit. Unde possimus delectus ut,
            expedita, voluptatum ex dolores dolore laborum nihil porro autem
            veniam sequi optio. Id provident eaque suscipit aliquam sunt?
          </p>
        </div>
        <div className="about_image_placeholder"></div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};

  .about_subHeading {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;

    h3 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-weight: 800;

      @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
        font-size: 2rem;
      }
    }

    .hr {
      background-color: #7e6e8e;
      height: 0.1rem;
      width: 30%;
    }
  }

  .about_content {
    display: flex;
    gap: 2rem;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    .about_text {
      max-width: 50vw;

      @media (max-width: 800px) {
        max-width: 100%;
      }

      p {
        /* max-width: 80%; */
        font-size: 1.1rem;
        font-weight: 100;
        line-height: 1.6rem;
      }
    }

    .about_image_placeholder {
      height: 20rem;
      width: 60rem;
      max-width: 50vw;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: ${({ theme }) => theme.spacing.borderRadius};

      @media (max-width: 800px) {
        align-self: center;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
        max-width: 100%;
      }
    }
  }
`;
