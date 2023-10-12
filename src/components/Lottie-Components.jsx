import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Lottie from "lottie-react";
import React from "react";
import pageNotFound from "../assets/page-not-found.json";

const StyledBox = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  flexDirection: "column",
}));

export const PageNotFound = () => {
  return (
    <StyledBox
      justifyContent="center"
      alignItems="center"
      sx={{ background: "#1A202C" }}
    >
      <Lottie
        animationData={pageNotFound}
        style={{ padding: 0, margin: 0, height: 900 }}
      />
      {/* <Typography color="primary">
        We can't seem to find the page you're looking for{" "}
      </Typography> */}
    </StyledBox>
  );
};
