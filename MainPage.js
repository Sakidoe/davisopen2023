import ResponseAppBar from "./AppBar";
import InfoBox from "./InfoBox";
import DayTabs from "./DayTabs";
import { Alert, Box, Container, Typography } from "@mui/material";

export default function MainPage() {
  return (
    <Container maxWidth="xl">
      <ResponseAppBar></ResponseAppBar>
      <br></br>
      <br></br>
      <br></br>
      <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
        <Typography
          variant="h4"
          noWrap
          component="a"
          align="center"
          sx={{
            mr: 2,
            fontWeight: "bold",
            letterSpacing: "0rem",
            color: "inherit",
            textDecoration: "none",
            whiteSpace: "normal",
          }}
        >
          Polar Bear LXVII Tourney Schedule
        </Typography>
      </Box>
      <InfoBox layout={false}></InfoBox>
      <InfoBox layout={true}></InfoBox>
      <Alert severity="info" sx={{ p: 2 }}>
        <a
          href="https://drive.google.com/file/d/16wLCCTE9Nfn_IrK_SlsjQPfX1jDnpJI_/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Draws
        </a>{" "}
        and match times are now published! Please make sure you review your
        match times before coming to the tournament. This page is periodically
        updated, so do not use this page to check whether your matches are on
        time.
      </Alert>
      <DayTabs></DayTabs>
    </Container>
  );
}
