import Head from "next/head";
import styled from "styled-components";
import About from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import KdAppBar from "../components/KdAppBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DAVID KINUTHIA | DEV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/kd_io_favicon.ico" />
      </Head>
      <KdAppBar />
      <StyledMain>
        <HeroSection />
        <About />
      </StyledMain>
    </div>
  );
}

const StyledMain = styled.main`
  // from isTablet going up; between isTb and isXlD
  @media (min-width: ${({ theme }) => theme.breakPoints.isTablet}) {
    padding: 0 6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.isDesktop}) {
    padding: 0 10rem;
  }

  // from isXlD going up
  @media (min-width: ${({ theme }) => theme.breakPoints.isXlDesktop}) {
    padding: 0 25rem;
  }

  // from isTb going down; btwn isTb and isMb
  @media (max-width: ${({ theme }) => theme.breakPoints.isTablet}) {
    padding: 0 5rem;
  }

  // from isMb going down; btwn isMb and isSm
  @media (max-width: ${({ theme }) => theme.breakPoints.isMobile}) {
    padding: 0 2rem;
  }

  // from isSm goind down, i.e, this is the default.
  @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
    padding: 0 1rem;
  }
`;