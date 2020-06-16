import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Container from "./utility/Container";
import Profile from "./Profile";
import SkillsTable from "./sidebar/SkillsTable";
import Header from "./sidebar/Header";
import Burger from "./miniNav/Burger";
import Menu from "./miniNav/Menu";

const THEME = {
  colors: {
    white: "#FFFFFF",
    grey: "#8899a6",
    lightBlue: "#1da1f2",
    darkBlue: "#15202b",
  },
};

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <ThemeProvider theme={THEME}>
      <div>
        <Burger open={openMenu} onClick={setOpenMenu} />
        <Menu onClick={setOpenMenu} open={openMenu} />
        <Container>
          <Header className="fade-right" />
          <Profile className="fade-down" />
          <SkillsTable className="fade-left" />
        </Container>
      </div>
    </ThemeProvider>
  );
}
