import { Typography, Grid, Button } from "@mui/material";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import imageLoader from "../pages/ImageLoader";


function Layout() {
  return (
    <Grid>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fa vicon.ico" />
      </Head>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f9fcfd;",
          paddingTop: "6px",
        }}
      >
        <Typography>
          <Image
            loader={imageLoader}
            src="https://i1.lmsin.net/website_images/in/logos/logo-homecentre.svg"
            alt="Picture of the author"
            width={130}
            height={34}
          />
        </Typography>

        <Typography>
          <Button
            sx={{
              color: "#000",
              backgroundColor: "#0f448a",
              marginRight: "2px",
              fontFamily: "CaliforniaPalmsScript",
            }}
          >
            Regester
          </Button>
          <Button
            sx={{
              color: "#000",
              backgroundColor: "#0f448a",
              marginRight: "2px",
              fontFamily: "CaliforniaPalmsScript",
            }}
          >
            Login
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Layout;