import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import { HiglightedText } from "../sharedstyles";

const About = () => {
  const startDateInYears = new Date(2018, 10, 1).getFullYear();
  const nowInYears = new Date().getFullYear();
  const experienceYears = nowInYears - startDateInYears;

  return (
    <Wrapper id="about">
      <SectionHeading text="About Me" showHr={true} />
      <div className="about_content">
        <div className="about_text">
          <p>
            Hello again. My name is{" "}
            <HiglightedText>David Kinuthia,</HiglightedText> and I'm a frontend
            engineer based in Nairobi, Kenya.
          </p>
          <p>
            I've been in tech for over {experienceYears - 1} years now, with a
            focus on frontend development. I love tech and design. As a kid, I
            loved things that looked elegant and luxurious. This has stuck with
            me as I've grown older and I've come to appreciate things that are
            not only elegant but remain functional and easy to use even more.
            This is how I came to find myself in frontend development after
            studying Mathematics and Computer Science in college.
          </p>
          <p>
            I find myself using the following when am building something new:
            React and its ecosystem (NextJs, Tailwind, Redux, React-Query,
            Styled-Components e.t.c). Typescript (and Javascript). Firebase,
            MongoDB, GCP, GitHub Actions for CI/CD, Prisma.
          </p>
          <p>
            My goal has remained roughly the same: to build things that evoke
            the same emotions that I experienced as a kid. I've found that the
            best way to do that on the web is to build UIs that are not only
            elegant and aesthetically pleasing but are as equally functional,
            responsive, intuitive
          </p>
        </div>
        {/* <div className="about_image_placeholder"></div> */}
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};

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

      @media (min-width: ${({ theme }) => theme.breakPoints.isDesktop}) {
        width: 120rem;
      }
    }
  }
`;
