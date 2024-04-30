import React from "react";
import "./aboutSection.css";
import { Typography, Avatar, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MetaData from "../MetaData";
const About = () => {
  return (
    <>
      <MetaData title="About Us | Ecommerce" />
      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
          <Typography component="h1">About Us</Typography>

          <div>
            <div>
              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src="https://res.cloudinary.com/dh3okvhow/image/upload/v1711805112/mgbhfiorjaew3utbufhd.jpg"
                alt="Founder"
              />
              <Typography>Aashish Kushwah</Typography>
              <Button
                href="https://www.instagram.com/heart_hacker_ashu623/"
                target="blank"
                color="primary"
              >
                Visit Instagram
              </Button>
              <span>
                This is a sample wesbite made by @aashish kushwah. Only with the
                purpose to learn MERN Stack.
              </span>
            </div>
            <div className="aboutSectionContainer2">
              <Typography component="h2">Our Brands</Typography>
              <a
                href="https://www.linkedin.com/in/aashish-kushwah-78367424b/"
                target="blank"
              >
                <LinkedInIcon className="linkedInSvgIcon" />
              </a>

              <a
                href="https://www.instagram.com/heart_hacker_ashu623/"
                target="blank"
              >
                <InstagramIcon className="instagramSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
