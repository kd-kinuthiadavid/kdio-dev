import React from "react";
import styled from "styled-components";
import { HiglightedText } from "../sharedstyles";

const About = () => {
  return (
    <Wrapper>
      <div className="heading">
        <hr />
        <h2>About Me.</h2>
      </div>
      <div className="content">
        <p>
          Hello, my name is David Kinuthia. I am a{" "}
          <HiglightedText>front-end engineer</HiglightedText> based in{" "}
          <HiglightedText>Nariobi, Kenya</HiglightedText>. I aim at building UIs
          that are intuitive and easy to use. I am{" "}
          <HiglightedText>currently pursuing</HiglightedText> my growing{" "}
          <HiglightedText>
            interests in UI/UX design, animations and microinteractions
          </HiglightedText>
          . I enjoy reading and writing <HiglightedText>poetry</HiglightedText>{" "}
          and short stories when I am not coding. Feel free to grab my resume
          for more information and don’t forget to peruse through{" "}
          <HiglightedText>some of my work.</HiglightedText> Cheers.
        </p>
        {/* @TODO: add a picture element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture */}
        <div className="img_placeholder"></div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  margin: 2rem 0;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};

  .heading {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;

    hr {
      width: 50%;
      height: 0.125rem;
    }

    h2 {
      width: 50%;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 1rem;
    font-family: ${({ theme }) => theme.fonts.text};

    p {
      font-size: 1.188rem;
      line-height: 1.5em;
      text-align: left;
    }

    .img_placeholder {
      background-color: ${({ theme }) => theme.colors.secondary};
      height: 22rem;
      width: 25rem;
      border-radius: ${({ theme }) => theme.spacing.borderRadius};
      align-self: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
    margin: 2rem 0;
    padding: 0 2rem;

    .heading {
      h2 {
        font-size: 2rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.isMobile}) {
    padding: 0 5rem;
  }

  @media (min-width: 750px) {
    .content {
      flex-direction: row;
      justify-content: space-between;
      gap: 3rem;

      p {
        width: 70%;
      }

      .img_placeholder {
        height: 18rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.isTablet}) {
    .heading {
      max-width: 70%;
    }
    padding: 0 10rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.isDesktop}) {
    max-width: 80%;
    .heading {
      max-width: 50%;
    }
  }
`;
