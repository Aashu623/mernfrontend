import React from "react";
import "./CheckoutSteps";
import { StepLabel, Stepper, Typography, Step } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function CheckoutSteps({ activeStep }) {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <LocalShippingIcon />,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <LibraryAddIcon />,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <AccountBalanceWalletIcon />,
    },
  ];

  const stepStyles = { boxSizing: "border-box" };

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "tomato" : "rgba(0,0,0,0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
}

export default CheckoutSteps;
