import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoBox(props) {
  const layout = props.layout;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (layout) {
    return (
      <div>
        <center>
          <Button
            variant="outlined"
            sx={{ p: 1, m: 1 }}
            href="#/courts"
            target="_blank"
          >
            Tourney Court Layout
          </Button>
        </center>
      </div>
    );
  }
  return (
    <div>
      <center>
        <Button variant="outlined" onClick={handleClickOpen}>
          Announcements & Details
        </Button>
      </center>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar style={{ background: "#003262" }}>
          <IconButton
            sx={{
              color: "#FFFFFF",
            }}
            edge="start"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{ m: 0, p: 2, fontWeight: "bold" }}
            variant="h6"
            component="div"
            color="#FFFFFF"
          >
            Announcements & Details
          </Typography>
        </Toolbar>
        <Box sx={{ p: 3 }} style={{ background: "#f3f6fa" }}>
          <Typography>
            <strong>Announcements</strong> <br></br>
            <a
              href="https://drive.google.com/file/d/16wLCCTE9Nfn_IrK_SlsjQPfX1jDnpJI_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Click here for the draws!
            </a>
            <br></br>
            <br></br>
            <strong>Dates</strong> <br></br>- Saturday 2/18 (Singles, Mixed, CMD, DMD),
            8:30AM-10PM <br></br>- Sunday 2/19 (Doubles, except CMD, DMD), 8:30AM-2PM <br></br>-
            Check-in will begin at 8:10AM on both days. <br></br>
            <br></br>
            <strong>Events</strong> <br></br>- Flights: A, B, C, D Singles,
            Doubles, Mixed
            <br></br>- Events may be combined depending on number of entries.
            <br></br>- Draws will be capped at the discretion of the tournament
            directors.<br></br>- Multiple partners are NOT allowed.
            <br></br>- Players can play a maximum of 2 events within 2
            consecutive flights (A, B, C, D) per day. For instance, this means
            that one cannot sign up for BMS, CMD, and DMD. All of your entries
            must be within two flights. In other words, keep all of your entries
            between 2 consecutive letters (AB, BC, or CD). <br></br>
            <br></br>
            <strong>Entry Fees</strong> <br></br>- $18 for the first event, $15
            for each additional event. No more than 2 flights per event.
            <br></br>- Entry fees will be collected online. Please read the {" "}
            <a
              href="https://docs.google.com/document/d/1gKLrObSsGdL8rLNJHQsyGHytigIUAyAC7y0iUstitMA/edit?fbclid=IwAR3D7QT8gFxZwCumoA9uJP1I8VrnkUAkSc-MUIHVhV5bmf9xy49qxnHp4P4"
              target="_blank"
              rel="noreferrer"
            >
            payment instructions
            </a>
            {" "} CAREFULLY. You MUST pay before playing your first match. We will NOT be taking Venmo, Zelle,
            or other online payment options.
            <br></br>
            <br></br>
            <strong>Entry Deadline</strong> <br></br>- If you are withdrawing
            after the deadline please notify us at calbadminton@gmail.com{" "}
            <br></br>
            Birds: <br></br>- Unlimited shuttles will be provided for A flights;
            however, people will need to supply their own shuttles for all other
            flights.<br></br>
            <br></br>
            <strong>Prizes:</strong> <br></br>- Trophies will be awarded to all
            1st and 2nd place finishers. 1st and 2nd place will also be awarded cash prizes.<br></br>
            <br></br>
            <strong>T-Shirts</strong>
            <br></br>- We will be selling t-shirts at the tournament for $17.
            <br></br>- The t-shirt design will be posted a few weeks leading up
            to the tournament.<br></br>
            <br></br>
            <strong>
              <a href="http://bit.ly/1MskFkL" target="_blank" rel="noreferrer">
                Parking
              </a>
            </strong>
            <br></br>- Follow the link above for a map of all the parking lots
            surrounding the RSF. For reference, the RSF is located at the
            intersection of Bancroft Ave. and Dana St. <br></br>- On Saturday,
            we recommend that you park in any of the garages marked with a Blue
            "P" near Shattuck Ave. <br></br>- On Sunday, parking in the lots
            with a brown "P" will be cheaper and okay to park in.
            <br></br>
            The earlier you get here, the better the space you will get!
            <br></br>
            <br></br>
            <strong>Regulations</strong> <br></br>
            1. The tournament will be conducted in accordance with USAB
            regulations; IN THE EVENT OF AN INCONSISTENCY, THE DECISIONS OF THE
            TOURNAMENT DIRECTORS ARE FINAL. <br></br>
            2. Players not ready to play 10 minutes after their matches are
            called will be disqualified.<br></br>
            3. Food and drink (with the exception of water and sports drinks)
            are not allowed inside the gym. Participants caught with food/drink
            will be disqualified immediately.<br></br>
            4. Main round matches will be played in the best 2 out of 3 games to
            21 points using the BWF Rally Point Scoring System. Consolation
            matches will be played one game to 21, with the exception of finals.
            <br></br>
            5. Each player playing doubles must submit SEPARATE entry forms.
            Incomplete partnerships will not be guaranteed a spot in the draws.
            <br></br>
            6. Seeding will be conducted by the tournament directors and will be
            done according to USAB ranking and prior tournament results.
            Concerns over this process can be voiced by contacting the
            tournament directors at calbadminton@gmail.com <br></br>
            7. Players' flights may be altered at the discretion of the
            tournament directors to prevent players from playing below their
            skill level.
            <br></br>
            8. Players who make it to the semi-finals of the higher flight may
            be disqualified from the lower flight.<br></br>
            9. Women are allowed to sign up for men's flights, but men are not
            allowed to sign up for women's flights. A mixed pair may not sign up
            for any regular doubles flights.<br></br>
            10. Rest time is limited to 10 minutes There will be no lunch break.
            Please plan it according to your match time, given that players must
            be present 30 minutes prior to their match time.
            <br></br>
            <br></br>
            Feel free email us at calbadminton@gmail.com if you have any
            questions or concerns! Make sure you guys invite all your friends
            and we look forward to seeing you all!<br></br>
            <br></br>
            Polar Bear Tournament Co-directors: Eric Chang, John Le, Charles
            Liu, and Sophia Siopack<br></br>
            <br></br>
            <strong>
              <a
                href="https://www.facebook.com/akbadmintontennis"
                target="_blank"
                rel="noreferrer"
              >
                Sponsor & Partner: AK Badminton & Tennis
              </a>
            </strong>
          </Typography>
        </Box>
      </Dialog>
    </div>
  );
}
