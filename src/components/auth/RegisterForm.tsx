import React, { useState } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import { useRegister } from "../../api/auth/useRegister";

// const useStyles = makeStyles((theme) => ({
//   form: {
//     width: "100%", // Fix IE11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

const RegisterForm = () => {
  //   const classes = useStyles();
  const registerMutation = useRegister();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate({
      username: username,
      password: password,
      email: email,
    });
  };

  const isPasswordMatch = password === confirmPassword;

  const isStrongPassword = (password) => {
    // Implement your password strength check logic here
    // Example: Check for minimum length, uppercase, lowercase, numbers, special characters, etc.
    return password.length >= 8;
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          error={!isStrongPassword(password)}
          helperText={
            !isStrongPassword(password) &&
            "Password should be at least 8 characters long"
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="new-password"
          error={!isPasswordMatch}
          helperText={!isPasswordMatch && "Passwords do not match"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          //   className={classes.submit}
          disabled={!isPasswordMatch || !isStrongPassword(password)}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
