import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";

import Logo from "../../assets/images/Logo.png";
import { useRouter } from "next/router";

const KdAppBar = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const router = useRouter();

  const navigateToSection = (sectionName: string) =>
    router.push(`/#${sectionName}`);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#32174D" }}>
        <AppToolBar>
          <img src={Logo.src} alt="kinuthia david logo" className="nav_icon" />
          {!isMobile && (
            <InlineNav>
              <p onClick={() => navigateToSection("home")}>Home</p>
              <p onClick={() => navigateToSection("about")}>About</p>
              <p>Work</p>
              <p>Contact</p>
            </InlineNav>
          )}
          <AppBtn
            variant="outlined"
            color="inherit"
            sx={{
              color: "#FF007C",
              textTransform: "capitalize",
              borderColor: "#FF007C",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Resume
          </AppBtn>
        </AppToolBar>
      </AppBar>
    </Box>
  );
};

export default KdAppBar;

const AppToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;

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
`;
