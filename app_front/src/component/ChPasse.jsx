import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
	paper: {
	  marginTop: theme.spacing(8),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	avatar: {
	  margin: theme.spacing(1),
	  backgroundColor: theme.palette.secondary.main,
	},
	form: {
	  width: '100%', // Fix IE 11 issue.
	  marginTop: theme.spacing(1),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  lg1:
  {
    
  },
  }));
  const [values, setValues] = React.useState({
    password: '',
    c_password:'',
    showPassword1: false,
    showPassword2: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword1 = () => {
    setValues({ ...values, showPassword1: !values.showPassword1 });
  };
  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
function Login() {
	
	  const classes = useStyles();

    return (
        <div>
		 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form noValidate>
        <Grid item xs={12}>
            <FormControl  variant="outlined"  fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">mode passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword1 ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {values.showPassword1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl  variant="outlined"  fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">confirmer mode passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword2 ? 'text' : 'password'}
            value={values.c_password}
            onChange={handleChange('c_password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="Secondary"
            className={classes.submit}
          >
           Envoyer Email
          </Button>
        </form>
      </div>
    </Container>	
        </div>
    )
}

export default Login
//  ffb4b4//7mar
// aee1e1//zra9
// ffc478//sfar
// ee99a0//
// b8b5ff