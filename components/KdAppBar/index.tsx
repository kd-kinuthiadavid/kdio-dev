import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";
import { Button, useMediaQuery } from "@mui/material";

const KdAppBar = () => {
  const isMobile = useMediaQuery("(max-width: 650px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#32174D" }}>
        <AppToolBar>
          <img src={Logo.src} alt="kinuthia david logo" className="nav_icon" />
          {!isMobile && (
            <InlineNav>
              <p>About</p>
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
      {isMobile && (
        <AppBar
          position="fixed"
          color="inherit"
          sx={{ top: "auto", bottom: 0, backgroundColor: "#32174D" }}
        >
          <AppToolBar>
            <p>About</p>
            <p>Work</p>
            <p>Contact</p>
          </AppToolBar>
        </AppBar>
      )}
    </Box>
  );
};

export default KdAppBar;

const AppToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-family: ${({ theme }) => theme.fonts.heading};

  img {
    height: 4rem;
    width: 4rem;
  }
`;

const InlineNav = styled.div`
  display: flex;
  gap: 2rem;

  border: ${({ theme }) => `2px solid ${theme.colors.text}`};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 1.5rem;
  border-radius: ${({ theme }) => theme.spacing.borderRadiusNav};
  font-family: ${({ theme }) => theme.fonts.heading};

  p {
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
