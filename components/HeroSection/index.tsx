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
        Hello There, my name is <HiglightedText>David Kinuthia</HiglightedText>.
        I am a <HiglightedText>frontend engineer</HiglightedText> and I
        specialize in{" "}
        <HiglightedText>
          building elegant, functional and intuitive UIs
        </HiglightedText>
        . You’re highly encouraged to <HiglightedText>see</HiglightedText> some
        of <HiglightedText> my work below</HiglightedText> :)
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
          Hire Me
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
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.spacing.bodyMargin};

  h1 {
    font-size: 5rem;
    line-height: 6.25rem;
    max-width: 90%;

    @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
      font-size: 4rem;
      line-height: 5rem;
      min-width: 100%;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.1rem;
    max-width: 60%;

    @media (max-width: ${({ theme }) => theme.breakPoints.isTablet}) {
      max-width: 90%;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
  }

  .cta {
    display: flex;
    gap: 1rem;
    margin: 5rem 0;
  }
`;

const CTABtn = styled(Button)`
  width: 15rem;
  height: 4rem;
  font-size: 1.3rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
    width: 13rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

const SecCTABtn = styled(CTABtn)`
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default HeroSection;
