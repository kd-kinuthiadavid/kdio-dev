import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { HiglightedText } from "../sharedstyles";

const HeroSection = (): JSX.Element => {
  return (
    <Wrapper>
      <h1>
        I Build Elegant, <br /> Functional & Intuitive UIs.
      </h1>
      <p>
        Hello there, my name is <HiglightedText>David Kinuthia</HiglightedText>.
        I am a <HiglightedText>frontend engineer</HiglightedText> and I
        specialize in{" "}
        <HiglightedText>
          building elegant, functional and intuitive UIs
        </HiglightedText>
        . Am currently modernizing the account receivable finance operations in
        Africa{" "}
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

    @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
      font-size: 2rem;
      line-height: 2.5rem;
      max-width: 90vw;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6rem;

    max-width: 50vw;
    text-align: left;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
      max-width: 100vw;
      font-size: 0.9rem;
      line-height: 1.3rem;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
      max-width: 100vw;
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
