import { Grid, Stack, Box } from "@mui/material";
import "./home.css";
const HomeScreen = () => {
  return (
    <Grid container xs={12}>
      <Grid
        xs={3}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box justifyContent="flex-start" alignItems="flex-start" ml={7}>
          <img src="../../assets/logo.png" alt="logo" width={"70%"} />
        </Box>
      </Grid>
      <Grid
        mt={"80px"}
        item
        xs={9}
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Stack
          direction="row"
          height={40}
          xs={6}
          spacing={6}
          justifyContent="flex-end"
          alignItems="center"
          pr={22}
        >
          <Box>Αρχική</Box>
          <Box>Σχετικά</Box>
          <Box>Testimonials</Box>
          <Box>Blog</Box>
          <Box
            p={2}
            borderRadius={15}
            color={"white"}
            bgcolor="black"
            justifyContent="center"
            alignItems="center"
          >
            Επικοινωνία
          </Box>
        </Stack>
      </Grid>
      <Grid
        height={"90vh"}
        className="first-item"
        direction="row"
        container
        xs={12}
        ml={14}
        mt={-10}
      >
        <Box
          pt={20}
          h={10}
          minWidth={"50vw"}
          alignItems="flex-start"
          justifyContent="flex-start"
          textAlign="left"
        >
          <Box>
            <span className="h1-menu">
              Μαζική <br />{" "}
              <span className="yellow-span">αναγνωρισιμότητα</span> <br /> για
              την επιχείρηση σου. <br />
            </span>
          </Box>
          <Box mt={7} fontSize={24}>
            <span>
              Δεν έχει σημασία ποιός είναι ο κλάδος εργασίας <br />
              σου, η θέση σου, το παρελθόν σου , οι <br />
              ανασφάλειες που είχες μέχρι τώρα και σε <br />
              κρατούσαν πίσω από το να βγάλεις <br />
              βίντεο για την επιχείρηση σου.
            </span>
          </Box>
        </Box>
        <Box h={10} maxWidth={"30vw"} marginTop={10}>
          <img src="../../assets/mainphoto.jpg" alt="hehe" width={"100%"} />
        </Box>
      </Grid>
      <Grid
        height="70vh"
        container
        direction="row"
        mt={10}
        xs={12}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="25vw"
          textAlign="left"
          mr={20}
          fontSize="32px"
          fontWeight="bold"
        >
          <span>
            Δεν έχει σημασία ποιός είναι ο κλάδος εργασίας σου, η θέση σου, το
            παρελθόν σου , οι ανασφάλειες που είχες μέχρι τώρα και σε κρατούσαν
            πίσω από το να βγάλεις βίντεο για την επιχείρηση σου.
          </span>
        </Box>
        <Box width="35vw" textAlign="left" alignItems="flex-start" mb={15}>
          <h1>Τι κάνουμε</h1> <br />
          Αν επενδύσεις στα βίντεο, τα βίντεο θα σου επιστρέψουν αυτό τον χρόνο
          σε αναγνωρισιμότητα, διασυνδέσεις και προφανώς πελατεία. <br /> <br />
          Τα βίντεο βραχείας διάρκειας δεν είναι μαγικό χάπι.Θα χρειαστεί να
          δουλέψεις , ενδεχομένως, πάνω σε παρουσιαστικό , τονικότητα,
          δημιουργικότητα, εκφραστικότητα, υπομονή.
          <Box
            p={2}
            borderRadius={15}
            color={"black"}
            bgcolor="#FFDE59"
            justifyContent="center"
            alignItems="center"
            width="20%"
            mt={5}
            textAlign={"center"}
          >
            no words :D
          </Box>
        </Box>
      </Grid>
      <Grid
        container
        direction="row"
        mt={10}
        xs={12}
        justifyContent="space-evenly"
        alignItems="center"
        height="50vh"
      >
        <Box height="100%" width="25vw">
          <Box height="100%">
            <Box
              height={"30%"}
              alignItems="center"
              justifyContent="center"
              pt={"10%"}
              mb={8}
              pl={10}
              width="200px"
              gcolor={"#FFDE59"}
            >
              <Box bgcolor={"#FFDE59"} p={5}>
                <img src="../../assets/advice.png" alt="edit" />
              </Box>
            </Box>
            <Box height={"40%"} p={6}>
              <span className="box-title">Καθοδήγηση</span>
              <br />
              <br />
              Δημιουργία βίντεο υλικού για επιχειρήσεις.
            </Box>
          </Box>
        </Box>
        <Box height="100%" width="25vw">
          {" "}
          <Box height="100%">
            <Box
              height={"30%"}
              alignItems="center"
              justifyContent="center"
              pt={"10%"}
              mb={8}
              pl={10}
              width="200px"
              gcolor={"#FFDE59"}
            >
              <Box bgcolor={"#FFDE59"} p={5}>
                <img src="../../assets/Path3.png" alt="edit" />
              </Box>
            </Box>
            <Box height={"40%"} p={6}>
              <span className="box-title">Μοντάρισμα (edit)</span>
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur elit.
            </Box>
          </Box>
        </Box>
        <Box height="100%" width="25vw">
          {" "}
          <Box height="100%">
            <Box
              height={"30%"}
              alignItems="center"
              justifyContent="center"
              pt={"10%"}
              mb={8}
              pl={10}
              width="200px"
              gcolor={"#FFDE59"}
            >
              <Box bgcolor={"#FFDE59"} p={5}>
                <img src="../../assets/Path4.png" alt="edit" />
              </Box>
            </Box>
            <Box height={"40%"} p={6}>
              <span className="box-title">Ανάλυση ανταγωνισμού</span>
              <br />
              <br />
              Σε πλατφόρμες όπως Tiktok, Youtube, Instagram.
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        container
        direction="row"
        mt={20}
        xs={12}
        justifyContent="space-evenly"
        alignItems="center"
        height="50vh"
      >
        <Box>Random chat photo</Box>
      </Grid>
      <Grid
        container
        xs={12}
        justifyContent="space-evenly"
        alignItems="center"
        height="50vh"
        pl={"20%"}
      >
        <Grid item xs={12}>
          <Box fontSize={50} textAlign={"start"}>
            Testimonials
          </Box>
        </Grid>
        <Grid
          direction="row"
          xs={12}
          justifyContent="space-evenly"
          alignItems="center"
          height="50vh"
        >
          <Box>PHONE PHOTO</Box>
          <Box></Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
