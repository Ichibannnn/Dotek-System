import {
  AccountCircleOutlined,
  PasswordOutlined,
  Image,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Container,
  Grid,
  InputAdornment,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import loginBackgroundImage3 from "../assets/svg/loginBackgroundImage3.svg";

import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const Login = (props) => {
  // const { name, control, onChange: onValueChange, ...textfield } = props;

  // const {
  //   watch,
  //   control,
  //   reset,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm({
  //   mode:"all",
  //   resolver: yupResolver(schema),
  //   defaultValues: {
  //     username: "",
  //     password: ""
  //   }
  // })

  const hideLoginForm = useMediaQuery("(max-width: 958px)");

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "bgForm.black_1",
        overflow: "hidden",
        // backgroundImage: `url(${loginBackgroundImage3})`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={-5}
        mt={10}
      >
        <Paper
          elevation={6}
          className="paper-color"
          sx={{
            display: hideLoginForm ? "none" : "flexs",
            width: "32rem",
            height: "33rem",
          }}
        >
          <Box
            sx={{ height: "full", width: "100%", padding: 4 }}
            textAlign="center"
          >
            <Typography mt={5} color="white" fontWeight="bold" variant="h3">
              {" "}
              WELCOME!
            </Typography>
            <Typography color="white" fontSize="sm">
              One TEAM One RDF
            </Typography>
            <img
              src="/src/assets/svg/dotek-login-illustration4.svg"
              alt="Background"
              className="login-svg"
            />
          </Box>
        </Paper>
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            width: 450,
            height: 480,
            padding: 4,
            bgcolor: "bgForm.black_1",
          }}
        >
          <Stack
            spacing={0}
            direction="column"
            sx={{ width: "100%" }}
            textAlign="center"
          >
            <Box p={0} zIndex="100">
              <img
                src="/src/assets/img/dotek-login.png"
                alt="dotek-icon"
                className="login-icon"
              />
            </Box>
            <Typography color="white" fontWeight="bold" variant="h5">
              {" "}
              Sign in your Account
            </Typography>
            <Typography color="gray" fontSize="sm">
              Management Information System
            </Typography>
            <LoginForm />
          </Stack>
        </Paper>
      </Stack>
      <Box
        zIndex="1"
        borderRadius="10px 0 0 10px"
        mt={6}
        flexDirection="column"
        display="flex"
        justifyContent="center"
      >
        <Box justifyContent="center" display="flex">
          <img
            src="/src/assets/img/misLogo.png"
            alt="logo"
            loading="lazy"
            style={{ width: "10%", height: "100%" }}
          />
        </Box>
        <Typography fontSize="10px" color="gray" textAlign="center">
          &#169; 2023 Powered by <br /> Management Information System
        </Typography>
      </Box>
    </Stack>
  );
};

export default Login;

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs">
      <form>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  label="Enter your email address"
                  sx={{ borderColor: "primary" }}
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : null}
                  autoComplete="off"
                  // InputProps= {{
                  //   startAdornment: (
                  //     <InputAdornment sx={{ color: "gray" }} position="start">
                  //       <AccountCircleOutlined />
                  //     </InputAdornment>
                  //   ),
                  //   // inputProps: { style: { color: "#fff", bgcolor: "gray" } },
                  // }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showPassword ? "text" : "password"}
                  label="Enter your password"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : null}
                  InputProps={{
                    // startAdornment: (
                    //   <InputAdornment sx={{ color: "gray" }} position="start">
                    //     <PasswordOutlined />
                    //   </InputAdornment>
                    // ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{ color: "gray" }}
                          onClick={showPasswordHandler}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    inputProps: { style: { color: "#fff", bgcolor: "gray" } },
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: 3,
          }}
          // sx={{
          //   marginTop: 3,
          //   bgcolor: "#7E21D4",
          //   "&:hover": {
          //     bgcolor: "#4B0082",
          //   },
          // }}
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </Container>
  );
};
