import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { HiglightedText } from "../sharedstyles";

const HeroSection = (): JSX.Element => {
  return (
    <Wrapper id="home">
      <h1>
        I Build Elegant, <br /> Functional & Intuitive UIs.
      </h1>
      <p>
        Hello there, my name is David Kinuthia. I am a{" "}
        <HiglightedText>frontend engineer</HiglightedText> based in{" "}
        <HiglightedText>Nairobi, Kenya.</HiglightedText> I specialize in
        building elegant, functional and intuitive UIs . Am currently
        modernizing the account receivable finance operations in Africa{" "}
        <HiglightedText className="highlighted_link">
          <a target="_blank" rel="noreferrer" href="https://www.churpy.co/">
            @Churpy
          </a>
        </HiglightedText>
        .
      </p>

      <div className="cta">
        <CTABtn
          variant="contained"
          sx={{
            color: "#FFEBD6",
            backgroundColor: "#FF007C",
            textTransform: "capitalize",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Let's Chat
        </CTABtn>
        <SecCTABtn
          variant="outlined"
          sx={{
            color: "#FF007C",
            textTransform: "capitalize",
            borderColor: "#FF007C",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          See Work
        </SecCTABtn>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10rem 0rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.isDesktop}) {
    padding: 13rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.isTablet}) {
    padding: 10rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
    padding: 10rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
    padding: 3rem 0;
  }

  h1 {
    font-size: 4rem;
    line-height: 5rem;
    text-align: left;
    overflow-wrap: break-word; // or 'word-wrap: break-word';
    margin: 0;

    @media (min-width: ${({ theme }) => theme.breakPoints.isDesktop}) {
      max-width: 60vw;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints.isXlDesktop}) {
      max-width: 50vw;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.isTablet}) {
      max-width: 100vw;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1.1rem;
    font-weight: 100;
    line-height: 1.6rem;
    max-width: 50vw;
    text-align: left;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
      min-width: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.isTablet}) {
      max-width: 80vw;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints.isDesktop}) {
      max-width: 50vw;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints.isXlDesktop}) {
      max-width: 35vw;
    }

    .highlighted_link:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .cta {
    display: flex;
    gap: 1.5rem;
  }
`;

const CTABtn = styled(Button)`
  width: 11rem;
  height: 3rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};

  &.MuiButton-contained:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }

  &.MuiButton-outlined:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &.MuiButton-outlined {
    @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
    width: 13rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

const SecCTABtn = styled(CTABtn)`
  color: ${({ theme }) => theme.colors.text};
`;

export default HeroSection;
