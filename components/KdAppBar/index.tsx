import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../../assets/images/Logo.png";
import { useRouter } from "next/router";
import { downloadResume } from "../../utils";

const KdAppBar = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const router = useRouter();

  const navigateToSection = (sectionName: string) =>
    router.push(`/#${sectionName}`);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#32174D" }}>
        <AppToolBar>
          {!isMobile ? (
            <>
              <img
                onClick={() => navigateToSection("home")}
                src={Logo.src}
                alt="kinuthia david logo"
                className="nav_icon"
              />
              <InlineNav>
                <p onClick={() => navigateToSection("home")}>Home</p>
                <p onClick={() => navigateToSection("about")}>About</p>
                <p onClick={() => navigateToSection("work")}>Projects</p>
                <p onClick={() => navigateToSection("contact")}>Contact</p>
              </InlineNav>
              <AppBtn
                variant="outlined"
                color="inherit"
                onClick={downloadResume}
                sx={{
                  color: "#FF007C",
                  textTransform: "capitalize",
                  borderColor: "#FF007C",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Resume
              </AppBtn>
            </>
          ) : (
            <MobileNav>
              <img
                onClick={() => navigateToSection("home")}
                src={Logo.src}
                alt="kinuthia david logo"
                className="nav_icon"
              />
              <p onClick={() => navigateToSection("about")}>About</p>
              <p onClick={() => navigateToSection("work")}>Projects</p>
              <p onClick={() => navigateToSection("contact")}>Contact</p>
              <p onClick={downloadResume}>Resume</p>
            </MobileNav>
          )}
        </AppToolBar>
      </AppBar>
    </Box>
  );
};

export default KdAppBar;

const MobileNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 0.3rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
    gap: 0.7rem;
  }

  img {
    height: 1.8rem;
    width: 1.8rem;
  }

  p {
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
      font-size: 0.8rem;
    }

    &:hover {
      padding: 0.5rem 1rem;
      background-color: #4a2c68;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const AppToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    justify-content: center;
  }

  font-family: ${({ theme }) => theme.fonts.heading};
  margin: ${({ theme }) => theme.spacing.navMargin};

  &.MuiToolbar-root {
    padding: 0.5rem 0;
    @media (max-width: ${({ theme }) => theme.breakPoints.isSmallMobile}) {
      margin: 0 1rem;
    }
  }

  img {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
`;

const InlineNav = styled.div`
  display: flex;
  gap: 1rem;

  border: ${({ theme }) => `1px solid ${theme.colors.text}`};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 1rem;
  border-radius: ${({ theme }) => theme.spacing.borderRadiusNav};
  font-family: ${({ theme }) => theme.fonts.heading};

  p {
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const AppBtn = styled(Button)`
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  transition: all 0.3s ease-in-out;
`;
