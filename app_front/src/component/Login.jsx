import React, { useState } from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import { Router } from 'react-router';
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
 
function Login() {
  const [log,SetLog]=useState({
    'email':'',
    'password':'',
    showPassword1: false,
  });
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  const [rt,srt]=useState(false);
  const handlesubmit=(e)=>
  {
        srt(true);
        e.preventDefault();
        const bodyFormData=new FormData();
        bodyFormData.append('email',log.email);
        bodyFormData.append('password',log.password);
        axios({
        method: "post",
        url: "/Login",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
        }).then(res=>{
          console.log(res.data);
        localStorage.setItem('token',res.data.success.token);
        localStorage.setItem('user_name',res.data.type[0].user_name);
        }).catch(err=>{
          console.log(err);
        })
       srt(false);
  }
  const handleClickShowPassword1 = () => {
    SetLog({ ...log, showPassword1: !log.showPassword1 });
  };
  const handleChange = (prop) => (event) => {
    SetLog({ ...log, [prop]: event.target.value });
  };
	  const classes = useStyles();
  
    return (
        <div>
		 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handlesubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange('email')}
          />
           <FormControl  variant="outlined"  fullWidth>
         <InputLabel htmlFor="outlined-adornment-password">mode passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={log.showPassword1 ? 'text' : 'password'}
            value={log.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {log.showPassword1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="souviens vous de moi"
          />
           <Grid container justify="flex-end" item xs={12}>
              <Link href='/oblierModePasse' >
			        Vous avez oublié votre mot de passe?
              </Link>
            </Grid>
            {
              !rt ?<Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={()=>{
                //  EnvoyerData();
                }}
              >
               Connecter
              </Button>:<Button>HELLO</Button>}
         
       
           
           <Grid container justify="flex-end" item xs={12}>
              <Link href="#" className={classes.lg1}>
                {"Vous n'avez pas de compte? creer compte"}
              </Link>
              </Grid>
        </form>
      </div>
    </Container>	
        </div>
    )
}

export default Login
