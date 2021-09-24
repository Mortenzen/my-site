import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  function LastnameUplifting(e) {
    props.onLastnameChange(e.target.value);
  }

  function FirstnameUplifting(e) {
    props.onFirstnameChange(e.target.value);
  }

  function emailUplifting(e) {
    props.onEmailChange(e.target.value);
  }

  function passwordUplifting(e) {
    props.onPasswordChange(e.target.value);
  }

  function passwordConfirmUplifting(e) {
    props.onPasswordConfirmChange(e.target.value);
  }

  function onSubmitUplifting() {
    props.onSubmit();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={FirstnameUplifting}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              <div style={{ color: "red" }}>{props.errors.firstName}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={LastnameUplifting}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
              <div style={{ color: "red" }}>{props.errors.lastName}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={emailUplifting}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <div style={{ color: "red" }}>{props.errors.email}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={passwordUplifting}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <div style={{ color: "red" }}>{props.errors.password}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={passwordConfirmUplifting}
                variant="outlined"
                required
                fullWidth
                name="passwordConfirm"
                label="ConfirmPassword"
                type="password"
                id="passwordConfirm"
              />
              <div style={{ color: "red" }}>{props.errors.passwordMatch}</div>
            </Grid>
          </Grid>
          <Button
            onClick={onSubmitUplifting}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
