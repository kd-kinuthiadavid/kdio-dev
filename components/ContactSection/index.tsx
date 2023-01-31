import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
import { SecCTABtn } from "../HeroSection";

const Contact = () => {
  return (
    <Wrapper>
      <SectionHeading text="Get In Touch." showHr={false} />
      <p>
        What's next? Like what you see and you'd like us to work together? Have
        a project in mind? A question? Or you just want to say hi? My inbox is
        always open - and I always reply.
      </p>
      <CTABtn
        variant="outlined"
        onClick={() =>
          (window.location.href = "mailto:kd.kinuthiadavid@gmail.com")
        }
        sx={{
          color: "#FF007C",
          textTransform: "capitalize",
          borderColor: "#FF007C",
          fontFamily: "'JetBrains Mono', monospace",
          marginTop: "3rem",
        }}
      >
        Say Hello
      </CTABtn>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  height: 100vh;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10rem;

  p {
    font-size: 1.3rem;
    margin-top: -1rem;
  }
`;

const CTABtn = styled(SecCTABtn)`
  &.MuiButton-outlined {
    @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
      display: block;
    }
  }
`;
