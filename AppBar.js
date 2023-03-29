import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "./logo.png";

const pages = [
  {
    name: "TOURNAMENT SOFTWARE",
    url: "https://www.tournamentsoftware.com/sport/tournament?id=553C475D-C82B-40B9-98AE-E19DEB0B5355",
  },
  {
    name: "FACEBOOK EVENT PAGE",
    url: "https://www.facebook.com/events/581617123810195",
  },
];
function ResponsiveAppBar() {
  return (
    <AppBar position="fixed" style={{ background: "#003262" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton href="/tourney-schedule">
            <Avatar src={logo} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/tourney-schedule"
            sx={{
              mr: 2,
              fontWeight: "bold",
              letterSpacing: "0rem",
              color: "inherit",
              textDecoration: "none",
              whiteSpace: "normal",
            }}
          >
            CAL BADMINTON
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Typography
                variant="h8"
                noWrap
                component="a"
                href={page.url}
                target="_blank"
                sx={{
                  mr: 2,
                  fontWeight: "bold",
                  letterSpacing: "0rem",
                  color: "inherit",
                  textDecoration: "none",
                  whiteSpace: "normal",
                }}
              >
                {page.name}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
