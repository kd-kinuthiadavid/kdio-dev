import styled from "styled-components";

interface SectionHeadingProps {
  text: string;
  showHr: boolean;
}

const SectionHeading = ({ text, showHr }: SectionHeadingProps) => {
  return (
    <Wrapper>
      <h3>{text}</h3>
      {showHr ? <div className="hr"></div> : null}
    </Wrapper>
  );
};

export default SectionHeading;

const Wrapper = styled.div`
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
`;
